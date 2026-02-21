<?php
$repo = '/home/master_najwsfztft/dead-lead-reactivation';
$webroot = '/home/680037.cloudwaysapps.com/uyzcqntapg/public_html/dist';

// 1. Pull latest code
$pull = shell_exec("cd $repo && git pull origin main 2>&1");
echo "<pre>Git Pull:\n$pull</pre>";

// 2. Build
$build = shell_exec("cd $repo && npm run build 2>&1");
echo "<pre>NPM Build:\n$build</pre>";

// 3. Copy to correct webroot
$copy = shell_exec("cp -r $repo/dist/* $webroot/ 2>&1");
echo "<pre>Deploy:\n$copy</pre>";

echo "<pre>Done.</pre>";
