function showNext(currentSectionId, nextSectionId) {
    document.getElementById(currentSectionId).classList.remove('active');
    document.getElementById(nextSectionId).classList.add('active');
}

function redirecionar() {
    window.location.href = '../../main-page.html';
  }

function checkAnswer(answerName, correctAnswer, currentQuestionId, nextContentId) {
    const radios = document.getElementsByName(answerName);
    let selectedValue = null;
    for (let radio of radios) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    const feedback = document.getElementById('feedback' + currentQuestionId.slice(-1));
    if (!selectedValue) {
        feedback.innerHTML = "Por favor, selecione uma resposta.";
        feedback.classList.remove('success');
        feedback.classList.add('feedback');
        return;
    }

    if (selectedValue === correctAnswer) {
        feedback.innerHTML = "Resposta correta! Redirecionando...";
        feedback.classList.remove('feedback');
        feedback.classList.add('success');
        setTimeout(() => {
            showNext(currentQuestionId, nextContentId);
        }, 1500);
    } else {
        feedback.innerHTML = "Resposta incorreta. Tente novamente.";
        feedback.classList.remove('success');
        feedback.classList.add('feedback');
    }
}