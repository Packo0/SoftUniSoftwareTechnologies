<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
	<style>
		table * {
			border: 1px solid black;
			width: 50px;
			height: 50px;
		}
    </style>
</head>
<body>
<table>
    <tr>
        <td>
            Red
        </td>
        <td>
            Green
        </td>
        <td>
            Blue
        </td>
    </tr>

    <?php 
        for($row =  51; $row <= 255; $row += 51) {
            echo "<tr>";
                echo "<td style='background-color: rgb($row, 0, 0)'></td>";
                echo "<td style='background-color: rgb(0, $row, 0)'></td>";
                echo "<td style='background-color: rgb(0, 0, $row)'></td>";
            echo "</tr>";
        }
    ?>

</table>
</body>
</html>