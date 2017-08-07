<?php

function array2xml ($array_item) {
    $xml = '';
    foreach($array_item as $element => $value)
    {
        if (is_array($value))
        {
            $xml .= "<$element>".array2xml($value)."</$element>";
        }
        elseif($value == '')
        {
            $xml .= "<$element />";
        }
        else
        {
            $xml .= "<$element>".htmlentities($value)."</$element>";
        }
    }
    return $xml;
}


    header('Content-type: application/xml');

    $db = new mysqli("localhost", "ajax", "student", "ToDo");
    
    $sql = "select * from tasks";
    
    $stmt = $db->prepare($sql);
    
    $stmt->bind_result($id, $desc, $complete, $created);
    
    $stmt->execute();
    
    $tasks = "<tasks>";
    while($stmt->fetch()) {
        $tasks .= "<task>";
            $tasks .="<id>$id</id>";
            $tasks .="<description>$desc</description>";
            $tasks .="<complete>$complete</complete>";
            $tasks .="<created>$created</created>";        
        $tasks .= "</task>";
    }
    $tasks .="</tasks>";



    echo $tasks;
?>