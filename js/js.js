/* =========================================
   MISSION FILTER
========================================= */

// Get all filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");

// Get all mission cards
const missionCards = document.querySelectorAll(".mission-card");


// Add click event to every filter button
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");


        // Get selected filter
        const filter = button.getAttribute("data-filter");


        // Check every mission
        missionCards.forEach(card => {

            const status = card.getAttribute("data-status");


            // Show all missions
            if (filter === "all") {

                card.classList.remove("hide-card");

            }

            // Show selected missions
            else if (status === filter) {

                card.classList.remove("hide-card");

            }

            // Hide other missions
            else {

                card.classList.add("hide-card");

            }

        });

    });

});