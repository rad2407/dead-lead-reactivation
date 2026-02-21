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

// 4. Create SPA route directories so /sop, /schedule, /thank-you work directly
$routes = ['sop', 'schedule', 'thank-you'];
foreach ($routes as $route) {
    shell_exec("mkdir -p $webroot/$route && cp $webroot/index.html $webroot/$route/index.html 2>&1");
}
echo "<pre>Routes created.</pre>";

echo "<pre>Done.</pre>";
