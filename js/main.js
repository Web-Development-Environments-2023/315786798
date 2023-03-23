function changeNav() {
    var x = document.getElementById("topNav");
    if (x.className === "topNav") {
      x.className += " responsive";
    } else {
      x.className = "topNav";
    }
  }

function sendEmail() {
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let body = document.getElementById("email-content").value;

  let mailtoLink = "mailto:ronvo@post.bgu.ac.il?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  window.location.href = mailtoLink;
}

function addEmoji(emoji) {
  let inputEle = document.getElementById("email-content");
  
  inputEle.value += emoji;
}

function toggleEmojiDrawer() {
  let drawer = document.getElementById('drawer');
  if (drawer.classList.contains('hidden')) {
    drawer.classList.remove('hidden');
  } else {
    drawer.classList.add('hidden');
  }
}