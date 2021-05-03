// JavaScript code to pick a random color from array and injecting it to html

        function changeColor() {
            // Array containing colors
            var colors = [
                '255, 0, 0', '0, 255, 0', '0, 0, 255', '255, 166, 0', '0, 0, 0', '82, 5, 123', '84, 18, 59',
                '157, 11, 40', '253, 202, 64', '40, 150, 114', '120, 104, 230', '28, 197, 220'
            ];
            var gradientColors = ['255, 0, 157', '255, 255, 0', '0, 255, 238'];

            // selecting random color
            var random_color = colors[Math.floor(
                    Math.random() * colors.length)];
            document.documentElement.style
            .setProperty('--colors', random_color);  

            var random_Gradcolor = gradientColors[Math.floor(
                Math.random() * gradientColors.length)];
            document.documentElement.style
            .setProperty('--gradientCol', random_Gradcolor);
        } 
