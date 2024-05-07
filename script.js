const questions = [
    {
      category: "Sight (Visual)",
      type: "U",
      question: "1. They like bright or flickering objects and or like coloured/shiny objects e.g. disco/fairy lights"
    },
    {
      category: "Sight (Visual)",
      type: "U",
      question: "2. They are fascinated with brightly coloured objects and reflective surfaces"
    },
    {
      category: "Sight (Visual)",
      type: "U",
      question: "3. They rub their eyes more than usually expected; not just due to being tired"
    },
    {
      category: "Sight (Visual)",
      type: "U",
      question: "4. They enjoy looking closely at patterns and or watching repetitive movements"
    },
    {
      category: "Sight (Visual)",
      type: "O",
      question: "5. They sometimes lose their place in a book or when copying from the board"
    },
    {
      category: "Sight (Visual)",
      type: "O",
      question: "6. They cover their eyes, close them or squint at bright lights/colours"
    },
    {
      category: "Sight (Visual)",
      type: "O",
      question: "7. They tend to avoid bright lights or colours and prefer a darkened room with the curtains shut"
    },
    {
      category: "Sight (Visual)",
      type: "O",
      question: "8. They notice details when looking at things"
    },
    {
      category: "Sound (Auditory)",
      type: "U",
      question: "9. Likes to make lots of noise or use a loud voice"
    },
    {
      category: "Sound (Auditory)",
      type: "U",
      question: "10. Likes noisy places and busy places e.g. a party, a busy shop"
    },
    {
      category: "Sound (Auditory)",
      type: "U",
      question: "11. They do not always take in everything that is being said to them e.g. instructions, conversation"
    },
    {
      category: "Sound (Auditory)",
      type: "U",
      question: "12. They can get distracted easily by background noise"
    },
    {
      category: "Sound (Auditory)",
      type: "O",
      question: "13. They get easily distracted by sounds not noticed by others e.g. humming light, ticking clock"
    },
    {
      category: "Sound (Auditory)",
      type: "O",
      question: "14. They dislike hearing loud sounds e.g. car horns, sirens, loud music or TV"
    },
    {
      category: "Sound (Auditory)",
      type: "O",
      question: "15. They make repetitive noises, hum or sing to ‘block’ out other sounds"
    },
    {
      category: "Sound (Auditory)",
      type: "O",
      question: "16. They complain often about noise especially when lots of different noises happen at once"
    },
    {
      category: "Touch (Tactile)",
      type: "U",
      question: "17. They prefer a firm hug, being stroked and having people near"
    },
    {
      category: "Touch (Tactile)",
      type: "U",
      question: "18. They like clothing to be tight and well-fitted"
    },
    {
      category: "Touch (Tactile)",
      type: "U",
      question: "19. They pinch, bite or rub themselves to feel a sensation e.g. press an object into their skin"
    },
    {
      category: "Touch (Tactile)",
      type: "U",
      question: "20. They like to see how things feel and sometimes use touch to explore people, places and objects"
    },
    {
      category: "Touch (Tactile)",
      type: "O",
      question: "21. They do not like being touched e.g. cuddles or being brushed up against"
    },
    {
      category: "Touch (Tactile)",
      type: "O",
      question: "22. They avoid getting their hands or body parts messy e.g. with glue, sand, paint, cream"
    },
    {
      category: "Touch (Tactile)",
      type: "O",
      question: "23. They prefer loose clothes and clothes without labels and seams"
    },
    {
      category: "Touch (Tactile)",
      type: "O",
      question: "24. They avoid teeth and hair brushing, hair or nail cutting and or showering and bathing"
    },
    {
      category: "Taste and Smell",
      type: "U",
      question: "25. They eat most foods and will try new things and will generally eat anything"
    },
    {
      category: "Taste and Smell",
      type: "U",
      question: "26. They like strong or unusual flavours e.g. spicy, sour, bitter, sweet"
    },
    {
      category: "Taste and Smell",
      type: "U",
      question: "27. They chew objects or put items in their mouth e.g. pens, fingers, fingers nails, hair, grit, stone, toys"
    },
    {
      category: "Taste and Smell",
      type: "U",
      question: "28. They seek out strong smells e.g. strong perfume and odours, cleaning products"
    },
    {
      category: "Taste and Smell",
      type: "O",
      question: "29. They are fussy eaters and prefer bland food"
    },
    {
      category: "Taste and Smell",
      type: "O",
      question: "30. They cannot tolerate certain foods and might gag at the texture or smell of certain foods"
    },
    {
      category: "Taste and Smell",
      type: "O",
      question: "31. They dislike either food that is too hot or food that is too cold"
    },
    {
      category: "Taste and Smell",
      type: "O",
      question: "32. They notice strong smells and avoid smells e.g. toilets, dinner hall, science lab, chemists"
    },
    {
      category: "Inside Body (Interoception)",
      type: "U",
      question: "33. They are not always aware they are hungry and need reminders to eat and drink"
    },
    {
      category: "Inside Body (Interoception)",
      type: "U",
      question: "34. They are not always aware that it cold or hot e.g. wearing a t-shirt whilst others a coat"
    },
    {
      category: "Inside Body (Interoception)",
      type: "U",
      question: "35. They are not always aware of the temperature of something (hot or cold) e.g. a hot radiator"
    },
    {
      category: "Inside Body (Interoception)",
      type: "U",
      question: "36. They are not always aware they need the toilet, as soon as they get a sensation they need to go"
    },
    {
      category: "Inside Body (Interoception)",
      type: "O",
      question: "37. They eat often and sometimes eat too much, to avoid the feeling of being hungry"
    },
    {
      category: "Inside Body (Interoception)",
      type: "O",
      question: "38. They dislike extreme hot or cold temperatures"
    },
    {
      category: "Inside Body (Interoception)",
      type: "O",
      question: "39. When they are anxious or excited they don't notice body sensations e.g. butterflies, heart racing"
    },
    {
      category: "Inside Body (Interoception)",
      type: "O",
      question: "40. They get the feeling of needing the toilet a lot and need to go to the toilet regularly"
    },
    {
      category: "Body Awareness (Proprioception)",
      type: "U",
      question: "41. They fidget a lot and find it hard to keep still"
    },
    {
      category: "Body Awareness (Proprioception)",
      type: "U",
      question: "42. They bump into people and objects without meaning to"
    },
    {
      category: "Body Awareness (Proprioception)",
      type: "U",
      question: "43. They tend to sit differently to others e.g. legs tucked under, or to the sides, draped on furniture"
    },
    {
      category: "Body Awareness (Proprioception)",
      type: "U",
      question: "44. They find it hard to play sports because of coordination difficulties; kicking, throwing accurately"
    },
    {
      category: "Body Awareness (Proprioception)",
      type: "O",
      question: "45. They avoid climbing, running and playing sports"
    },
    {
      category: "Body Awareness (Proprioception)",
      type: "O",
      question: "46. They worry about or have over-reactions to being knocked or pushed"
    },
    {
      category: "Body Awareness (Proprioception)",
      type: "O",
      question: "47. They sit upright and with their chair positioned tightly to the desk, use their hands as a headrest"
    },
    {
      category: "Vestibular (Movement/Balance)",
      type: "U",
      question: "48. They enjoy lots of movement e.g. rocking, spinning, jumping"
    },
    {
      category: "Vestibular (Movement/Balance)",
      type: "U",
      question: "49. They are not always aware of the risks of climbing or being up high"
    },
    {
      category: "Vestibular (Movement/Balance)",
      type: "U",
      question: "50. They find it difficult to sit still"
    },
    {
      category: "Vestibular (Movement/Balance)",
      type: "U",
      question: "51. They like intense rides or roundabouts"
    },
    {
      category: "Vestibular (Movement/Balance)",
      type: "O",
      question: "52. They prefer their feet to stay on the ground and dislike heights e.g. escalators, lifts"
    },
    {
      category: "Vestibular (Movement/Balance)",
      type: "O",
      question: "53. They prefer activities where they can be still e.g. lying on bed listening to music, computer time"
    },
    {
      category: "Vestibular (Movement/Balance)",
      type: "O",
      question: "54. They don't enjoy and tend to avoid physical activities e.g. ball games, riding a bike"
    },
    {
      category: "Vestibular (Movement/Balance)",
      type: "O",
      question: "55. They avoid fast or spinning activities and do not enjoy fast rides at theme parks"
    }
  ];
   
  let questionIndex = 0;
  let answers = [];
   
  const questionElement = document.getElementById('question');
  const nextButton = document.getElementById('nextButton');
  const disclaimerNextButton = document.getElementById('disclaimerNextButton');
  const resultContainer = document.getElementById('resultContainer');
  const questionContainer = document.getElementById('questionContainer');
  const interpretationContainer = document.getElementById('interpretation');
   
  function showQuestionnaire() {
    disclaimerContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    showNextQuestion();
  }
   
  function showNextQuestion() {
    const currentQuestion = questions[questionIndex];
    questionElement.textContent = currentQuestion.question;
   
    nextButton.onclick = () => {
      const selectedAnswer = document.querySelector('input[name="answer"]:checked');
      if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
      }
      answers.push(selectedAnswer.value);
      questionIndex++;
      if (questionIndex < questions.length) {
        showNextQuestion();
      } else {
        displayResults();
      }
    };
  }
   
  function displayResults() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
   
    const counts = {};
    answers.forEach((answer, index) => {
      const currentQuestion = questions[index];
      const { category, type } = currentQuestion;
      if (!counts[category]) {
        counts[category] = { 'U': 0, 'O': 0 };
      }
      if (answer === 'Yes') {
        counts[category][type]++;
      }
    });
   
    generateTables(counts);
    generateLineChart(counts);
    const interpretations = generateInterpretation(counts);
    displayInterpretation(interpretations);
  }
   
  function generateTables(counts) {
    const table1 = document.getElementById('table1');
    const table2 = document.getElementById('table2');
   
    let totalYes = 0;
   
    Object.keys(counts).forEach(category => {
      const totalYesCategory = counts[category]['U'] + counts[category]['O'];
      if (totalYesCategory > 0) {
        const row1 = table1.insertRow();
        const cell1 = row1.insertCell(0);
        const cell2 = row1.insertCell(1);
        cell1.innerHTML = category;
        cell2.innerHTML = totalYesCategory;
        totalYes += totalYesCategory;
      }
    });
   
    // Adding Total row to Table 1
    const totalRow = table1.insertRow();
    totalRow.innerHTML = `
      <td>Total</td>
      <td>${totalYes}</td>
    `;
   
    // Setting values for Table 2
    table2.rows[1].cells[1].textContent = counts['Sight (Visual)'] ? counts['Sight (Visual)']['U'] : 0;
    table2.rows[1].cells[2].textContent = counts['Sight (Visual)'] ? counts['Sight (Visual)']['O'] : 0;
    table2.rows[2].cells[1].textContent = counts['Sound (Auditory)'] ? counts['Sound (Auditory)']['U'] : 0;
    table2.rows[2].cells[2].textContent = counts['Sound (Auditory)'] ? counts['Sound (Auditory)']['O'] : 0;
    table2.rows[3].cells[1].textContent = counts['Touch (Tactile)'] ? counts['Touch (Tactile)']['U'] : 0;
    table2.rows[3].cells[2].textContent = counts['Touch (Tactile)'] ? counts['Touch (Tactile)']['O'] : 0;
    table2.rows[4].cells[1].textContent = counts['Taste and Smell'] ? counts['Taste and Smell']['U'] : 0;
    table2.rows[4].cells[2].textContent = counts['Taste and Smell'] ? counts['Taste and Smell']['O'] : 0;
    table2.rows[5].cells[1].textContent = counts['Inside Body (Interoception)'] ? counts['Inside Body (Interoception)']['U'] : 0;
    table2.rows[5].cells[2].textContent = counts['Inside Body (Interoception)'] ? counts['Inside Body (Interoception)']['O'] : 0;
    table2.rows[6].cells[1].textContent = counts['Body Awareness (Proprioception)'] ? counts['Body Awareness (Proprioception)']['U'] : 0;
    table2.rows[6].cells[2].textContent = counts['Body Awareness (Proprioception)'] ? counts['Body Awareness (Proprioception)']['O'] : 0;
    table2.rows[7].cells[1].textContent = counts['Vestibular (Movement/Balance)'] ? counts['Vestibular (Movement/Balance)']['U'] : 0;
    table2.rows[7].cells[2].textContent = counts['Vestibular (Movement/Balance)'] ? counts['Vestibular (Movement/Balance)']['O'] : 0;
  }
   
  function generateLineChart(counts) {
    const canvas = document.getElementById('lineChart').getContext('2d');
   
    const labels = Object.keys(counts);
    const dataU = Object.values(counts).map(item => item['U']);
    const dataO = Object.values(counts).map(item => item['O']);
   
    new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Under Stimulated',
          data: dataU,
          borderColor: '#007bff',
          fill: false
        }, {
          label: 'Over Stimulated',
          data: dataO,
          borderColor: '#28a745',
          fill: false
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Sensory Sensitivity'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
   
  function generateInterpretation(counts) {
    const interpretations = {};
   
    // Sight (Visual) Interpretation
    if (counts['Sight (Visual)']) {
      const visualCount = counts['Sight (Visual)'];
      interpretations['Sight (Visual)'] = {
        'U': visualCount['U'] >= 3 ? 'The individual seems to be under-sensitive to visual stimuli, showing a preference for bright and colorful objects.' : '',
        'O': visualCount['O'] >= 3 ? 'The individual seems to be over-sensitive to visual stimuli, showing discomfort with bright lights or colors.' : ''
      };
    }
   
    // Sound (Auditory) Interpretation
    if (counts['Sound (Auditory)']) {
      const auditoryCount = counts['Sound (Auditory)'];
      interpretations['Sound (Auditory)'] = {
        'U': auditoryCount['U'] >= 3 ? 'The individual appears to be under-sensitive to auditory stimuli, enjoying noisy environments.' : '',
        'O': auditoryCount['O'] >= 3 ? 'The individual appears to be over-sensitive to auditory stimuli, showing discomfort with loud sounds.' : ''
      };
    }
   
    // Touch (Tactile) Interpretation
    if (counts['Touch (Tactile)']) {
      const tactileCount = counts['Touch (Tactile)'];
      interpretations['Touch (Tactile)'] = {
        'U': tactileCount['U'] >= 3 ? 'The individual seems to be under-sensitive to tactile stimuli, enjoying firm hugs and tight clothing.' : '',
        'O': tactileCount['O'] >= 3 ? 'The individual seems to be over-sensitive to tactile stimuli, avoiding touch and preferring loose clothing.' : ''
      };
    }
   
    // Taste and Smell Interpretation
    if (counts['Taste and Smell']) {
      const tasteSmellCount = counts['Taste and Smell'];
      interpretations['Taste and Smell'] = {
        'U': tasteSmellCount['U'] >= 3 ? 'The individual appears to be under-sensitive to taste and smell stimuli, enjoying strong flavors and smells.' : '',
        'O': tasteSmellCount['O'] >= 3 ? 'The individual appears to be over-sensitive to taste and smell stimuli, being selective with food and avoiding strong odors.' : ''
      };
    }
   
    // Inside Body (Interoception) Interpretation
    if (counts['Inside Body (Interoception)']) {
      const interoceptionCount = counts['Inside Body (Interoception)'];
      interpretations['Inside Body (Interoception)'] = {
        'U': interoceptionCount['U'] >= 3 ? 'The individual seems to have under-sensitive interoception, requiring reminders for basic bodily needs like eating and drinking.' : '',
        'O': interoceptionCount['O'] >= 3 ? 'The individual seems to have over-sensitive interoception, experiencing discomfort with bodily sensations like hunger or temperature.' : ''
      };
    }
   
    // Body Awareness (Proprioception) Interpretation
    if (counts['Body Awareness (Proprioception)']) {
      const proprioceptionCount = counts['Body Awareness (Proprioception)'];
      interpretations['Body Awareness (Proprioception)'] = {
        'U': proprioceptionCount['U'] >= 3 ? 'The individual appears to have under-sensitive proprioception, displaying fidgeting and coordination difficulties.' : '',
        'O': proprioceptionCount['O'] >= 3 ? 'The individual appears to have over-sensitive proprioception, showing anxiety or avoidance towards physical activities.' : ''
      };
    }
   
    // Vestibular (Movement/Balance) Interpretation
    if (counts['Vestibular (Movement/Balance)']) {
      const vestibularCount = counts['Vestibular (Movement/Balance)'];
      interpretations['Vestibular (Movement/Balance)'] = {
        'U': vestibularCount['U'] >= 3 ? 'The individual seems to be under-sensitive to vestibular stimuli, enjoying intense movements and rides.' : '',
        'O': vestibularCount['O'] >= 3 ? 'The individual seems to be over-sensitive to vestibular stimuli, avoiding movement and displaying discomfort with heights.' : ''
      };
    }
   
    return interpretations;
  }
  function displayInterpretation(interpretations) {
    let interpretationHTML = '';
    Object.keys(interpretations).forEach(category => {
      const types = interpretations[category];
      let hasInterpretations = false;
      Object.keys(types).forEach(type => {
        if (types[type] !== '') {
          hasInterpretations = true;
        }
      });
      if (hasInterpretations) {
        interpretationHTML += `<p><strong>${category}:</strong></p>`;
        Object.keys(types).forEach(type => {
          if (types[type] !== '') {
            interpretationHTML += `<p>${types[type]}</p>`;
          }
        });
      }
    });
    interpretationContainer.innerHTML = interpretationHTML;
  }
   
   
  disclaimerNextButton.addEventListener('click', showQuestionnaire);
  nextButton.addEventListener('click', showNextQuestion);
  