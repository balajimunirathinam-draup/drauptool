// Your existing scripts here

// New function to handle searching with company name, keywords, and date filter
function searchWithCompanyAndDate() {
    var companyName = document.getElementById("companyName").value;
    var keywordInput = document.getElementById("keywords").value;
    var dateFilter = document.getElementById("dateFilter").value;
    var keywords = keywordInput.split(";").map(function(keyword) {
      return keyword.trim();
    });
  
    for (var i = 0; i < keywords.length; i++) {
      var keyword = keywords[i];
      if (keyword !== "") {
        var url = "https://www.google.com/search?q=" + encodeURIComponent(companyName + " " + keyword) + "&as_qdr=" + dateFilter;
        window.open(url, '_blank');
      }
    }
  }
  
  // New function to clear keywords and company name
  function clearKeywords() {
    document.getElementById("companyName").value = "";
    document.getElementById("keywords").value = "";
    document.getElementById("dateFilter").value = "";
  }
  
  // Additional Button code index
  document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the search button
    document.getElementById('search-button').addEventListener('click', function() {
      var selectedCategory = document.getElementById('tool-category').value;
      var searchInput = document.getElementById('search-input').value;
      filterAndDisplayTools(selectedCategory, searchInput);
    });
    
    // Function to filter and display tools based on category and search input
    function filterAndDisplayTools(category, searchInput) {
      // Clear the existing tool list
      var toolList = document.getElementById('tool-list');
      toolList.innerHTML = '';
  
      // Loop through your tool data and add items that match the criteria
      // For example:
      /* toolsData.forEach(tool => {
         if ((category === 'all' || tool.category === category) &&
             (searchInput === '' || tool.name.includes(searchInput))) {
           var toolItem = createToolItem(tool);
           toolList.appendChild(toolItem);
         }
       }); */
    }
  
    // Function to create a tool item
    function createToolItem(tool) {
      // Create and return the tool item DOM structure
      // For example:
      /* var toolItem = document.createElement('li');
         var toolLink = document.createElement('a');
         var toolInfo = document.createElement('div');
         var toolImage = document.createElement('img');
         var toolDescription = document.createElement('div');
         // Set content and attributes for toolItem, toolLink, toolImage, toolDescription
         // Append elements together and return the toolItem */
    }
  });


//logo design //
window.addEventListener('DOMContentLoaded', (event) => {
  const loaderContainer = document.querySelector('.loader-container');
  const content = document.querySelector('.content');

  setTimeout(() => {
    loaderContainer.style.opacity = '0';
    content.style.opacity = '1';
    setTimeout(() => {
      loaderContainer.style.display = 'none';
    }, 500);
  }, 1000); // You can adjust the duration as per your requirement
});
