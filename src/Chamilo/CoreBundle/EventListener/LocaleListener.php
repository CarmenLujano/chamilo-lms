<?php
/* For licensing terms, see /license.txt */

namespace Chamilo\CoreBundle\EventListener;

use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

use Chamilo\CoreBundle\Controller\LegacyController;
use Chamilo\CoreBundle\Security\Authorization\Voter\CourseVoter;
use Chamilo\CoreBundle\Security\Authorization\Voter\SessionVoter;
use Chamilo\CoreBundle\Security\Authorization\Voter\GroupVoter;
use Chamilo\CoreBundle\Framework\Container;
use Doctrine\ORM\EntityManager;
use Chamilo\UserBundle\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\FilterResponseEvent;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Event\FilterControllerEvent;
use Chamilo\CourseBundle\Controller\ToolInterface;
use Chamilo\CoreBundle\Entity\Course;
use Chamilo\CoreBundle\Entity\Session;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Chamilo\CourseBundle\Event\CourseAccess;
use Chamilo\CourseBundle\Event\SessionAccess;

/**
 * Class LocaleListener
 * @package Chamilo\CoreBundle\EventListener
 */
class LocaleListener implements EventSubscriberInterface
{
    private $defaultLocale;

    /** @var ContainerInterface */
    protected $container;

    /**
     * @param string $defaultLocale
     */
    public function __construct($defaultLocale = 'en', $container)
    {
        $this->defaultLocale = $defaultLocale;
        $this->container = $container;
    }

    /**
     * @param GetResponseEvent $event
     */
    public function onKernelRequest(GetResponseEvent $event)
    {
        $request = $event->getRequest();

        if (!$request->hasPreviousSession()) {
            return;
        }

        $request = $event->getRequest();
        $container = $this->container;
        $installed = $container->get('kernel')->isInstalled();
        if (!$installed) {
            return;
        }

        $courseCode = $request->get('course');

        // Detect if the course was set with a cidReq:
        if (empty($courseCode)) {
            $courseCodeFromRequest = $request->get('cidReq');
            $courseCode = $courseCodeFromRequest;
        }

        /** @var EntityManager $em */
        $em = $container->get('doctrine')->getManager();

        if (!empty($courseCode)) {
            /** @var Course $course */
            $course = $em->getRepository(
                'ChamiloCoreBundle:Course'
            )->findOneByCode($courseCode);
        }

        // try to see if the locale has been set as a _locale routing parameter
        if ($locale = $request->attributes->get('_locale')) {
            $request->getSession()->set('_locale', $locale);
        } else {
            $locale = $this->defaultLocale;

            // 1. Check platform locale
            $settings = $this->container->get('chamilo.settings.manager');
            $platformLocale = $settings->getSetting(
                'language.platform_language'
            );
            if (!empty($platformLocale)) {
                $locale = $platformLocale;
            }

            // 2. Check user locale
            // _locale_user is set when user logins the system check UserLocaleListener
            $userLocale = $request->getSession()->get('_locale_user');
            if (!empty($userLocale)) {
                $locale = $userLocale;
            }

            // 3. Check course locale
            /** @var Course $course */
            if (!empty($course)) {
                $courseLocale = $course->getCourseLanguage();
                if (!empty($courseLocale)) {
                    $locale = $courseLocale;
                }
            }

            // if no explicit locale has been set on this request, use one from the session
            $request->setLocale($locale);
            $request->getSession()->set('_locale', $locale);
        }
    }

    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return array(
            // must be registered before the default Locale listener
            KernelEvents::REQUEST => array(array('onKernelRequest', 17)),
        );
    }
}
