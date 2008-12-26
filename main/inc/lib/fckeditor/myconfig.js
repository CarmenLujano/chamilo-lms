FCKConfig.IMUploadPath = '';
FCKConfig.FlashUploadPath = '' ;
FCKConfig.AudioUploadPath = '' ;
FCKConfig.UserStatus = 'teacher' ;

FCKConfig.ToolbarSets["Question"] = [
	['Source','DocProps','-','NewPage','Preview','-'],
	['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
	['Bold','Italic','Underline','StrikeThrough','-','Subscript','Superscript'],
	['OrderedList','UnorderedList','-','Outdent','Indent'],
	['JustifyLeft','JustifyCenter','JustifyRight','JustifyFull'],
	['Link','Unlink','Anchor'],
	['ImageManager','Flash','MP3','Table','Rule','Smiley','SpecialChar','UniversalKey'],
	['Form','Checkbox','Radio','TextField','Textarea','Select','Button','ImageButton','HiddenField'],
	'/',
	['Style','FontFormat','FontName','FontSize'],['Attachment']
] ;

FCKConfig.ToolbarSets["Middle"] = [
	['Source','FontSize','Bold','Italic','Underline','StrikeThrough','TextColor','-','OrderedList','UnorderedList','-','Rule','Link','Unlink','Table','-','ImageManager','Flash']
] ;

FCKConfig.ToolbarSets["Agenda"] = [
	['FontSize','Bold','Italic','Underline','StrikeThrough','TextColor','-','OrderedList','UnorderedList','-','Rule','Link','Unlink','Table','-','ImageManager']
] ;

FCKConfig.ToolbarSets["Small"] = [
	['Bold','Italic','Underline','StrikeThrough','Link','Unlink','ImageManager','Flash','OrderedList','UnorderedList','Table']
] ;

FCKConfig.ToolbarSets["Profil"] = [
	['Bold','Italic','Underline','StrikeThrough','Link','Unlink','OrderedList','UnorderedList']
] ;

FCKConfig.ToolbarSets["Blog"] = [
	['Bold','Italic','Underline','StrikeThrough','Link','Unlink','ImageManager','OrderedList','UnorderedList','Table']
] ;

FCKConfig.ToolbarSets["Announcements"] = [
	['Bold','Italic','Underline','StrikeThrough','Link','Unlink','ImageManager','OrderedList','UnorderedList','Table']
] ;

FCKConfig.ToolbarSets["Full"] = [
	['FitWindow','PasteWord','Link','Unlink','Anchor','-','ImageManager','flvPlayer','Flash','EmbedMovies','MP3','YouTube','Table','Rule','-','Subscript', 'Superscript','-','OrderedList','UnorderedList','Outdent','Indent','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyFull'],'/',['FontFormat','Style','FontName','FontSize','Bold','Italic','Underline','StrikeThrough','TextColor', 'BGColor','-','Source']
] ;

FCKConfig.ToolbarSets["Comment"] = [
	['Bold','Italic','Underline','StrikeThrough']
] ;

FCKConfig.ToolbarSets["ForumLight"] = [
	['Bold','Italic','Underline','StrikeThrough']
] ;

FCKConfig.ToolbarSets["NewTest"] = [
	['Source','Bold','Italic','Underline','StrikeThrough','Link','Unlink','ImageManager','Flash','MP3','OrderedList','UnorderedList','Table']
] ;

FCKConfig.ToolbarSets["TestComment"] = [
	['Source','FontName','FontSize','TextColor','BGColor'],['Bold','Italic','Underline','StrikeThrough','Subscript', 'Superscript','Link','Unlink','ImageManager','Flash','MP3','OrderedList','UnorderedList','Table']
] ;

FCKConfig.ToolbarSets["Test"] = [
	['Bold','Italic','Underline','StrikeThrough','Subscript','Superscript','Link','Unlink','ImageManager','MP3','OrderedList','UnorderedList','Table']
] ;

FCKConfig.ToolbarSets["Survey"] = [
	['FontSize','Bold','Italic','TextColor','-','OrderedList','UnorderedList','-','Rule','Link','Unlink','Table','-','ImageManager','Source']
] ;

FCKConfig.ToolbarSets["Wiki"] = [
	['NewPage','Templates','Save','Print','PageBreak','Preview','ShowBlocks','-','Cut','Copy','Paste','PasteText','PasteWord','-','Undo','Redo','-','SelectAll','RemoveFormat','-','Find'],
	['Wikilink','Link','Unlink','Anchor','-','ImageManager','imgmapPopup','flvPlayer','Flash','EmbedMovies','MP3','Table','Rule','Smiley','SpecialChar','googlemaps'],
	['FontFormat','FontName','FontSize'],
	['Bold','Italic','Underline','StrikeThrough','-','Subscript','Superscript','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyFull','-','OrderedList','UnorderedList','-','Outdent','Indent','-','TextColor','BGColor'],
	['FitWindow']
	
] ;

var sOtherPluginPath = FCKConfig.BasePath.substr(0, FCKConfig.BasePath.length - 7) + 'editor/plugins/' ;

// Plugins

//Added by Ivan Tcholakov, 18-DEC-2008.
FCKConfig.Plugins.Add( "customizations" ) ;
FCKConfig.Plugins.Add( "dragresizetable" ) ;
FCKConfig.Plugins.Add( "tablecommands" ) ;

/*
FCKConfig.Plugins.Add("Video", "en", sOtherPluginPath ) ;
FCKConfig.Plugins.Add("Attachment", "en", sOtherPluginPath ) ;*/

// added by Julio Montoya
FCKConfig.Plugins.Add("MP3", "en", sOtherPluginPath ) ;
FCKConfig.Plugins.Add('ImageManager','en') ;
FCKConfig.Plugins.Add('flvPlayer','en') ;

FCKConfig.Plugins.Add("Flash", "en");

FCKConfig.Plugins.Add('fckEmbedMovies');
FCKConfig.Plugins.Add("wikilink", "en,es", sOtherPluginPath ) ; // support to english, spanish
FCKConfig.Plugins.Add("imgmap", "en,es", sOtherPluginPath );

FCKConfig.Plugins.Add("googlemaps", "en,es", sOtherPluginPath ) ;
// This key is for http://localhost. You must get one for each server where you want to use the plugin,
// just get the key for free here after agreeing to the Terms of Use of the GoogleMaps API:
// http://www.google.com/apis/maps/signup.html. // If you leave an empty string then the toolbar icon won't be shown.
FCKConfig.GoogleMaps_Key = 'ABQIAAAAlXu5Pw6DFAUgqM2wQn01gxT2yXp_ZAY8_ufC3CFXhHIE1NvwkxSy5hTGQdsosYD3dz6faZHVrO-02A';

//Added by Ivan Tcholakov, 19-DEC-2008.
FCKConfig.Plugins.Add( 'youtube', 'en' ) ;

// reduce format list
FCKConfig.FontFormats	= 'p;h1;h2;h3;h4;h5' ;
