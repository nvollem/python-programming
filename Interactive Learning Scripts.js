// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll-to-Top Button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerText = '⬆️';
  scrollToTopBtn.classList.add('scroll-to-top');
  document.body.appendChild(scrollToTopBtn);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Toggle Content Visibility (for future modals or interactive sections)
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
      alert('More content coming soon! Stay tuned.');
    });
  });


  // Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll-to-Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = '⬆️';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Toggle Content Visibility (for future modals or interactive sections)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function () {
    openModal(this.querySelector('h3').innerText, this.querySelector('p').innerText);
  });
});

// Modal Creation for More Information
function openModal(title, content) {
  // Create modal elements
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const modalTitle = document.createElement('h2');
  modalTitle.innerText = title;

  const modalBody = document.createElement('p');
  modalBody.innerText = content;

  const closeModalBtn = document.createElement('button');
  closeModalBtn.innerText = 'Close';
  closeModalBtn.classList.add('close-modal');

  // Append elements
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(closeModalBtn);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Show modal
  modal.style.display = 'block';

  // Close modal on button click
  closeModalBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  // Close modal on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
}

// Tooltip Implementation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('mouseover', function () {
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    tooltip.innerText = 'Go to ' + link.innerText;
    document.body.appendChild(tooltip);

    const rect = link.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.top - 30) + 'px';

    link.addEventListener('mouseout', function () {
      document.body.removeChild(tooltip);
    });
  });
});

document.getElementById("run-code").addEventListener("click", function() {
    const userCode = document.getElementById("user-code").value;
    const outputElement = document.getElementById("output");

    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
            throw "File not found: '" + x + "'";
        }
        return Sk.builtinFiles["files"][x];
    }

    Sk.configure({ output: function(text) {
        outputElement.innerHTML += text + '\n';
    }, read: builtinRead });

    outputElement.innerHTML = "";  // Clear previous output
    
    Sk.importMainWithBody("<stdin>", false, userCode, true)
        .then(function (module) {
            console.log("Code executed successfully.");
        })
        .catch(function (err) {
            outputElement.innerHTML = err.toString();
        });
});


// Challenge Definitions
const challenges = {
    1: {
        description: "Write a Python program to print 'Hello, World!'",
        starterCode: "print('Hello, World!')",
        expectedOutput: "Hello, World!\n"
    },
    2: {
        description: "Write a Python program to calculate the factorial of a number.",
        starterCode: "def factorial(n):\n    # Write your code here\n    return 1\n\nprint(factorial(5))",
        expectedOutput: "120\n"
    }
};

// Load a Coding Challenge
function loadChallenge(challengeNumber) {
    const challenge = challenges[challengeNumber];
    if (challenge) {
        document.getElementById("user-code").value = challenge.starterCode;
        document.getElementById("output").innerHTML = "";
        alert(challenge.description);
    }
}

document.getElementById("run-code").addEventListener("click", function() {
    console.log("Run Code button clicked");  // Debug message
    const userCode = document.getElementById("user-code").value;
    const outputElement = document.getElementById("output");

    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
            throw "File not found: '" + x + "'";
        }
        return Sk.builtinFiles["files"][x];
    }

    Sk.configure({
        output: function(text) {
            outputElement.innerHTML += text + '\n';
        },
        read: builtinRead
    });

    outputElement.innerHTML = "";  // Clear previous output
    
    Sk.importMainWithBody("<stdin>", false, userCode, true)
        .then(function () {
            console.log("Code executed successfully");  // Debug message
        })
        .catch(function (err) {
            outputElement.innerHTML = err.toString();
            console.error("Error: ", err);  // Log error to console
        });
});




document.getElementById("run-code").addEventListener("click", function() {
    const userCode = document.getElementById("user-code").value;
    const outputElement = document.getElementById("output");

    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
            throw "File not found: '" + x + "'";
        }
        return Sk.builtinFiles["files"][x];
    }

    Sk.configure({ output: function(text) {
        outputElement.innerHTML += text + '\n';
    }, read: builtinRead });

    outputElement.innerHTML = "";  // Clear previous output
    
    Sk.importMainWithBody("<stdin>", false, userCode, true)
        .then(function (module) {
            console.log("Code executed successfully.");
        })
        .catch(function (err) {
            outputElement.innerHTML = err.toString();
        });
});


window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});


