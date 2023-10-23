
        // Define the countdown time in seconds
        var countdownTime = 4; // Change this to your desired countdown time

        // Function to update the countdown display
        function updateCountdown() {
            var countdownElement = document.getElementById("1");
            countdownElement.textContent = "" + countdownTime + " seconds";
        }

        function startCountdown() {
            updateCountdown();
            var countdownElement = document.getElementById("1");
            countdownElement.style.display = "block"; // Show the countdown

            var countdownInterval = setInterval(function () {
                countdownTime--;

                if (countdownTime <= 0) {
                    clearInterval(countdownInterval);
                    if (countdownTime < 0) {
                        document.getElementById("2").textContent = "Time exceeded!";
                    } else {
                        document.getElementById("1").textContent = "";
                        document.getElementById("2").textContent = "Hello Engineers!";
                        document.getElementById("2").style.fontSize = "60px";
                    }
                } else {
                    updateCountdown();
                }
            }, 1000);
        }

        document.getElementById("start").addEventListener("click", function () {
            startCountdown();
        });