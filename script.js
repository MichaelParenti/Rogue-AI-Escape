document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
          question: "What does CPU stand for?",
          options: ["Central Processing Unit", "Computer Processing Unit", "Control Processing Unit", "Central Power Unit"],
          correctAnswer: 0
        },
        {
          question: "Which device allows computers to connect to the internet wirelessly?",
          options: ["Router", "Modem", "Switch", "Hub"],
          correctAnswer: 0
        },
        {
          question: "What is the most commonly used programming language for web development?",
          options: ["Python", "Java", "C++", "JavaScript"],
          correctAnswer: 3
        },
        {
          question: "Which type of storage is known for its fast access times but is more expensive compared to other storage options?",
          options: ["Hard Disk Drive (HDD)", "Solid State Drive (SSD)", "USB Flash Drive", "Optical Disc (CD/DVD)"],
          correctAnswer: 1
        },
        {
          question: "What does HTML stand for in web development?",
          options: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Hyper Tool Markup Language", "Home Tool Markup Language"],
          correctAnswer: 0
        },
        {
          question: "Which company developed the first graphical web browser, Mosaic?",
          options: ["Microsoft", "Apple", "Netscape", "IBM"],
          correctAnswer: 2
        },
        {
          question: "What does the acronym 'URL' stand for?",
          options: ["Universal Resource Locator", "Uniform Resource Locator", "Unique Resource Locator", "Universal Reference Locator"],
          correctAnswer: 1
        },
        {
          question: "What is the maximum data transfer speed of a USB 3.0 port?",
          options: ["480 Mbps", "1 Gbps", "5 Gbps", "10 Gbps"],
          correctAnswer: 2
        },
        {
          question: "What programming language is often used for developing mobile apps for iOS devices?",
          options: ["Java", "Swift", "Python", "C#"],
          correctAnswer: 1
        },
        {
          question: "What does 'RAM' stand for in computer terminology?",
          options: ["Read-Only Memory", "Random Access Memory", "Run-And-Maintain Memory", "Read-Accept-Memory"],
          correctAnswer: 1
        },
        {
          question: "Which technology is used to connect wireless devices in a short-range network, such as wireless headphones or keyboards?",
          options: ["Bluetooth", "Wi-Fi", "NFC (Near Field Communication)", "GPS"],
          correctAnswer: 0
        },
        {
          question: "What is the main purpose of an operating system (OS) in a computer?",
          options: ["To manage the hardware components of the computer", "To run applications and programs", "To create documents and files", "To play multimedia content"],
          correctAnswer: 0
        },
        {
          question: "Which programming language is commonly used for building scalable and high-performance web applications?",
          options: ["PHP", "Ruby", "Python", "Node.js (JavaScript)"],
          correctAnswer: 3
        },
        {
          question: "Which company developed the Python programming language?",
          options: ["Microsoft", "Apple", "Google", "Python Software Foundation"],
          correctAnswer: 3
        },
        {
          question: "What does the term 'URL' refer to on the internet?",
          options: ["Uniform Resource Locator", "Universal Resource Locator", "Unique Resource Locator", "Universal Reference Locator"],
          correctAnswer: 0
        },
        {
          question: "Which company developed the JavaScript programming language?",
          options: ["Microsoft", "Apple", "Netscape", "Google"],
          correctAnswer: 2
        },
        {
          question: "Which protocol is used to send emails over the internet?",
          options: ["HTTP", "SMTP", "TCP", "FTP"],
          correctAnswer: 1
        },
        {
          question: "Which programming language is often used for web development, server-side scripting, and system administration?",
          options: ["Python", "Java", "Ruby", "PHP"],
          correctAnswer: 3
        },
        {
          question: "What does the term 'HTTP' stand for in web development?",
          options: ["Hyper Text Transport Protocol", "Hyperlink Text Transmission Protocol", "Hypertext Transfer Protocol", "High-Throughput Text Transport Protocol"],
          correctAnswer: 2
        },
        {
          question: "Which company developed the C programming language?",
          options: ["Microsoft", "Apple", "IBM", "AT&T Bell Laboratories"],
          correctAnswer: 3
        },
        {
          question: "Which technology is used to store and access data over the internet, allowing users to access files from anywhere with an internet connection?",
          options: ["Cloud Computing", "Virtual Reality", "Augmented Reality", "Machine Learning"],
          correctAnswer: 0
        },
        {
          question: "What is the purpose of a DNS (Domain Name System) server?",
          options: ["To manage website content", "To secure network connections", "To translate domain names into IP addresses", "To handle email communication"],
          correctAnswer: 2
        },
        {
          question: "Which programming language is known for its simplicity, readability, and being suitable for beginners?",
          options: ["Python", "Java", "C++", "Ruby"],
          correctAnswer: 0
        },
        {
          question: "What does the term 'HTML' stand for in web development?",
          options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language", "Home Text Markup Language"],
          correctAnswer: 0
        },
        {
          question: "Which company developed the macOS operating system?",
          options: ["Microsoft", "Apple", "Linux Foundation", "Google"],
          correctAnswer: 1
        },
        {
          question: "What is the main function of a GPU (Graphics Processing Unit) in a computer?",
          options: ["To manage the computer's power supply", "To process graphical data for display on a monitor", "To store and access files", "To connect the computer to the internet"],
          correctAnswer: 1
        },
        {
          question: "Which technology is used to connect devices wirelessly within a short range, such as between a smartphone and a wireless speaker?",
          options: ["Bluetooth", "Wi-Fi", "NFC (Near Field Communication)", "GPS"],
          correctAnswer: 0
        },
        {
          question: "What is the purpose of a firewall in a computer network?",
          options: ["To speed up data transfer", "To block unwanted network traffic", "To enhance Wi-Fi signal strength", "To manage IP addresses"],
          correctAnswer: 1
        },
        {
          question: "What does the term 'GPU' stand for in computer graphics?",
          options: ["Graphics Processing Unit", "General Processing Unit", "General Purpose Unit", "Graphical Performance Unit"],
          correctAnswer: 0
        },
        {
          question: "What Operating System is most commonly used by hackers?",
          options: ["Kali Linux", "Windows", "MacOS", "Back Box"],
          correctAnswer: 0
        }
    ];     
  

  
    const questionText = document.getElementById("question");
    const optionsButtons = document.querySelectorAll(".option");
    const continueButton = document.getElementById("continue-button");
    const resultDiv = document.getElementById("result");
    const totalCorrectDiv = document.getElementById("total-correct");
  
    let level = 1;
    let currentQuestion = {};
    let totalCorrect = 0;
    let isFirstGuess = true;
  
    function setQuestion() {
      currentQuestion = questions[level - 1];
      questionText.textContent = currentQuestion.question;
      for (let i = 0; i < optionsButtons.length; i++) {
        optionsButtons[i].textContent = currentQuestion.options[i];
      }
      enableOptions();
    }
  
    function checkAnswer(selectedOption) {
      if (selectedOption === currentQuestion.correctAnswer) {
        if (isFirstGuess) {
          totalCorrect++;
          totalCorrectDiv.textContent = `Total Correct: ${totalCorrect}`;
        }
        resultDiv.textContent = "Correct!";
        continueButton.disabled = false;
        disableOptions();
        isFirstGuess = true;
      } else {
        resultDiv.textContent = "Incorrect! Try again.";
        isFirstGuess = false;
      }
    }
  
    function continueToNextLevel() {
      level++;
      if (level > questions.length) {
        if (totalCorrect >= 28) {
          questionText.textContent = "Congratulations! You escaped!";
        } else {
          questionText.textContent = "You did not escape! Try again. You must score higher to escape.";
        }
        hideOptions();
        totalCorrectDiv.style.fontSize = "24px";
        continueButton.style.display = "none";
        resultDiv.style.display = "none";
      } else {
        document.getElementById("level").textContent = "Level " + level;
        setQuestion();
        resultDiv.textContent = "";
        continueButton.disabled = true;
        showOptions();
      }
    }
  
    function hideOptions() {
      optionsButtons.forEach(button => button.style.display = "none");
    }
  
    function showOptions() {
      optionsButtons.forEach(button => button.style.display = "inline-block");
    }
  
    function disableOptions() {
      optionsButtons.forEach(button => button.disabled = true);
    }
  
    function enableOptions() {
      optionsButtons.forEach((button, index) => {
        button.disabled = false;
        button.onclick = () => checkAnswer(index);
      });
    }
  
    continueButton.addEventListener("click", continueToNextLevel);
  
    // Start the first level
    setQuestion();
  });