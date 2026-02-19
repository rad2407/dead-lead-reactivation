<?php
// 1. Pull the latest code from GitHub
$pull = shell_exec('git pull origin main 2>&1');
echo "<pre>Git Pull:\n$pull</pre>";

// 2. Automatically run the build command
$build = shell_exec('npm run build 2>&1');
echo "<pre>NPM Build:\n$build</pre>";
?>