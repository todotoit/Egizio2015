<?php

/**
 *  Optimized HTML partial for social crawlers
 *
 *  Will fetch a JSON file from {wd}/languages/social.json for the required 
 *  content.
 */

// Get language informations
$lang = $_GET['lang'];
if ($lang != 'en') {
  $lang = 'it';
}

// Get language json file ( with a little bit of security )
$q = $_GET['q'];
$baseDir = getcwd();
$file = getcwd() . '/' . $q . '/languages/social.json';
$path = realpath($baseDir . '/' . $file); 

if(strpos($path, $baseDir)) { 
  // if baseDir isn't at the front 0==strpos, most likely hacking attempt 
  die('Invalid Path'); 
}
else if(file_exists($path)) { 
  $content = json_decode(file_get_contents($path), true);
}
else { 
  header('HTTP/1.1 404 Not Found'); 
  echo "The requested file could not be found"; 
} 

?>
<!DOCTYPE html>
<html lang="<?php echo $lang; ?>">
  <head>
    <meta charset="utf-8">
    <title><?php echo $content[$lang]['title']; ?></title>
    
    <!-- Place this data between the <head> tags of your website -->
    <meta name="description" content="<?php echo $content[$lang]['description']; ?>" />

    <!-- Twitter Card data -->
    <meta name="twitter:card"        content="summary_large_image">
    <meta name="twitter:creator"     content="@CSP_live">
    <meta name="twitter:title"       content="<?php echo $content[$lang]['title'] ?>">
    <meta name="twitter:description" content="<?php echo $content[$lang]['description'] ?>">
    <meta name="twitter:image:src"   content="http://<?php echo $_SERVER['HTTP_HOST']; ?><?php echo $content[$lang]['tw_image'] ?>">

    <!-- Open Graph data -->
    <meta property="og:title"       content="<?php echo $content[$lang]['title'] ?>" />
    <meta property="og:type"        content="website" />
    <meta property="og:url"         content="http://<?php echo $_SERVER['HTTP_HOST']; ?>/<?php echo $_GET['q']; ?>?lang=<?php echo $lang; ?>" />
    <meta property="og:image"       content="http://<?php echo $_SERVER['HTTP_HOST']; ?><?php echo $content[$lang]['fb_image'] ?>" />
    <meta property="og:description" content="<?php echo $content[$lang]['description'] ?>" /> 
    <meta property="og:site_name"   content="egizio2015.it" />
  </head>
  <body>
    Hi Facebook or Twitter :) It's nice to see you here!
  </body>
</html>
