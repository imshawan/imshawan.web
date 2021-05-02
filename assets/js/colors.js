// JavaScript code to pick a random color from array and injecting it to html

        function changeColor() {
            // Array containing colors
            var colors = [
                '255, 0, 0', '0, 255, 0', '0, 0, 255', '255, 166, 0', '0, 0, 0', '82, 5, 123', '22, 36, 71', '84, 18, 59',
                '68, 55, 55', '92, 84, 112', '157, 11, 40', '253, 202, 64', '40, 150, 114', '120, 104, 230', '28, 197, 220'
            ];
              
            // selecting random color
            var random_color = colors[Math.floor(
                    Math.random() * colors.length)];
            document.documentElement.style
            .setProperty('--colors', random_color);  
        } 
