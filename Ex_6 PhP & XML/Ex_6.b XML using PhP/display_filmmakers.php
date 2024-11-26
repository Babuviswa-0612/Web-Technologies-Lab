<?php
$xml = simplexml_load_file("filmmakers.xml") or die("Error: Cannot load XML file");

echo "<h1>Famous Filmmakers</h1>";
echo "<table border='1' cellpadding='5' cellspacing='0'>";
echo "<tr><th>Name</th><th>Genre</th><th>Notable Work</th></tr>";

foreach ($xml->filmmaker as $filmmaker) {
    echo "<tr>";
    echo "<td>" . $filmmaker->name . "</td>";
    echo "<td>" . $filmmaker->genre . "</td>";
    echo "<td>" . $filmmaker->notableWork . "</td>";
    echo "</tr>";
}

echo "</table>";
?>
