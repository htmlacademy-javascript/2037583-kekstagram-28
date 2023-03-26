const COMMENTS_PER_PORTION = 5;

const bigPicture = document.querySelector('.big-picture');
const currentCommentCount = document.querySelector('.current-comments-count');
const totalCommentCount = document.querySelector('.comments-count');
const commentList = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');

const createComment = ({ avatar, name, message }) => {
  const comment = document.createElement('li');
  comment.classList.add('.social__comment');

  const socialPicture = document.createElement('img');
  socialPicture.classList.add('.social__picture');
  socialPicture.src = avatar;
  socialPicture.alt = name;

  const socialText = document.createElement('p');
  socialPicture.classList.add('.social__text');
  socialText.innerHTML = message;

  comment.appendChild(socialPicture);
  comment.appendChild(socialText);
  return comment;
};

const renderComments = (comments) => {

  commentList.innerHTML = '';

  const fragment = document.createDocumentFragment();

  totalCommentCount.innerHTML = comments.length;
  let visibleCount = 0;
  for(let i = 0; i < comments.length; i++){
    const commentElement = createComment(comments[i]);
    if(i >= COMMENTS_PER_PORTION){
      commentElement.classList.add('hidden');
    } else{
      visibleCount++;
    }

    fragment.append(commentElement);
  }
  commentList.append(fragment);
  currentCommentCount.innerHTML = visibleCount;
};

const showNextComments = () =>{

  let size = 0;
  const totalComments = parseInt(totalCommentCount.innerHTML, 10);
  const currComments = parseInt(currentCommentCount.innerHTML, 10);
  const unusedComments = totalComments - currComments;

  if(unusedComments === 0){
    return;
  } else if(unusedComments >= COMMENTS_PER_PORTION){
    size = COMMENTS_PER_PORTION;
  } else if(unusedComments < COMMENTS_PER_PORTION){
    size = unusedComments;
  }
  const ch = commentList.children;
  for(let i = 0; i < size; i++){
    ch[i + currComments].classList.remove('hidden');
  }

  currentCommentCount.innerHTML = currComments + size;

};
commentsLoader.addEventListener('click', showNextComments);


const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};

const renderPictureDetails = ({ url, likes, description }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').alt = description;
  bigPicture.querySelector('.big-picture__img img').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  renderComments(data.comments);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture };
