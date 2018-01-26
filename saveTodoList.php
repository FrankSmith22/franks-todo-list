<?php
    $contents = file_get_contents("php://input");
    $filename = "todolist.txt";
    file_put_contents($filename, $contents);
    exit("File saved");

?>