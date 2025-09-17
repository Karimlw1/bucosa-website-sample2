let programmer = document.querySelector('.programmer');
let button = document.getElementById("fa-code");


function programmerEntrance() {
  programmer.style.right = '0';
  button.style.right = "-5%";
}

function closeProgrammer() {
  programmer.style.right = "-100%";
  button.style.right = "0";
}

document.querySelectorAll('.fa-comment-dots').forEach(commentIcon => {
  commentIcon.addEventListener('click', () => {
    const post = commentIcon.closest('.post');
    const commentSection = post.querySelector('.comment-section');

    if (commentSection.style.visibility === 'visible') {
      commentSection.style.visibility = 'hidden';
      post.style.height = 'auto';
    } else {
      commentSection.style.visibility = 'visible';
      post.style.height = 'auto';
    }
  });
});



function closeCommentSection(event){
  const section = event.target.closest('.comment-section');
  section.style.visibility = 'hidden';
}


document.querySelectorAll('.fa-heart').forEach(heart => {
  heart.addEventListener('click', () => {
   const post = heart.closest('.post'); 
    const thumb = post.querySelector('.fa-thumbs-down');

if (heart.style.color === 'red') {
      heart.style.color = 'grey';
    } else if (thumb.style.color === 'blue') {
      alert("You disliked this post / make sure the post is not disliked");
    } else {
      heart.style.color = 'red';
    }

  });
});


document.querySelectorAll('.fa-thumbs-down').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const post = thumb.closest('.post'); 
    const heart = post.querySelector('.fa-heart');

    if (thumb.style.color === 'blue') {
      thumb.style.color = 'gray';
    } else if (heart.style.color === 'red') {
      alert("You liked this post / make sure the post is not liked");
    } else {
      thumb.style.color = 'blue';
    }
  });
});

function sendInput(event) {
  const sendBtn = event.target;
  const inputSendDiv = sendBtn.closest('#input-send');
  const commentInput = inputSendDiv.querySelector('.comment-input');
  const commentText = commentInput.value.trim();

  if (commentText === "") {
    alert("No comment");
    return;
  }

  // Create new comment div
  const newComment = document.createElement('div');
  newComment.classList.add('comment');

  newComment.innerHTML = `
    <div class="comment">
      <div class="user">
        <i class="fa fa-user">
          <p id="username">karim_abdoul_lw6</p> 
        </i>
      </div>
      <p class="user-comment">${commentText}</p>
    <div>
  `;

  // Find the closest comment section and append the comment
  const commentSection = sendBtn.closest('.comment-section');
  const commentsContainer = commentSection.querySelector('.comments');
  commentsContainer.appendChild(newComment);

  // Clear the input
  commentInput.value = "";
}


document.querySelectorAll('.fa-bookmark').forEach(bookmark => {
  bookmark.addEventListener('click', () => {
   if (bookmark.classList.contains('far')) {
  bookmark.classList.remove('far');
  bookmark.classList.add('fas');
  bookmark.style.color = 'gold';
} else {
  bookmark.classList.remove('fas');
  bookmark.classList.add('far');
  bookmark.style.color = 'blue';
}

  });
});

document.querySelectorAll('.comment-input').forEach(input => {
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents newline
      const sendBtn = input.parentElement.querySelector('.fa-paper-plane');
      sendBtn.click(); // Triggers sendInput()
    }
  });
});

const menu = document.getElementById('menu');
const body =document.querySelector('html');
const toggle = document.getElementById('menu-toggle');
let menuOpen = false;

 toggle.addEventListener('click', () => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    menu.style.left = '0';
    toggle.classList.remove('fa-bars');
    toggle.classList.add('fa-close');
    body.classList.add('no-scroll');
  } else {
    menu.style.left = '-500%';
    toggle.classList.remove('fa-close');
    toggle.classList.add('fa-bars');
    body.classList.remove('no-scroll');
  }
});

document.addEventListener('click', (e) => {
  if (menuOpen && !menu.contains(e.target) && !toggle.contains(e.target)) {
    menuOpen = false;
    menu.style.left = '-500%';
    toggle.classList.remove('fa-close');
    toggle.classList.add('fa-bars');
    body.classList.remove('no-scroll');
  }
});

const connectBox = document.getElementById('connectBox');
const htmlElement = document.querySelector('html');


let isUserConnected = localStorage.getItem('user_connected');

if (!isUserConnected) {
  connectBox.style.display = 'flex';
  htmlElement.classList.add('no-scroll');
}

function removeBox() {
  let connectBox2 = document.getElementById('connectBox'); 
  connectBox2.style.display= "none";
  htmlElement.classList.remove('no-scroll');
  localStorage.setItem('user_connected', 'guest');
}

function login() {
  window.location.href="login.html";
}
function signup() {
 window.location.href="signup.html";
}
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
  }
   
function contact_me(){
  const container = document.querySelector('.contact_me');
  const div = document.querySelector('.portfolio');
  const close= document.querySelector('.fa-close');
  container.style.padding="10px";
  div.style.display="block";
  close.style.display="block";

} 
function closeContact_me(){
   const container = document.querySelector('.contact_me');
  const div = document.querySelector('.portfolio');
  const close= document.querySelector('.fa-close');
  container.style.padding="0px";
  div.style.display="none";
  close.style.display="none";

}

