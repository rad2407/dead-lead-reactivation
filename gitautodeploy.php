<?php
// This script triggers a git pull on Cloudways
exec('git pull origin main 2>&1', $output);
echo implode("\n", $output);
?>