const getUser = async () => {
  try {
    const { data: users } = await axios.get('/users');
    const _list = docuemnt.getEmementById('');

    console.log(users);

    Object.keys(users).map((key) => {
      const _div = document.createElement('div');
      const _span = document.createElement('span');
      const _buttonEdit = document.createElement('button');
      const _buttonRemove = document.createElement('button');

      _span.textContent = users[key];
      _buttonEdit.textContent = '수정';
      _buttonRemove.textContent = '삭제';

      _buttonEdit.addEventListener('click', (event) => {
        try {
          const name = prompt('바꿀 이름을 입력하세요');

          name
            ? axios.put('/user/' + key, { name }).then(getUser)
            : alert('이름을 반드시 입력하셔야 합니다.');
        } catch (error) {
          console.log(error);
        }
      });

      _buttonRemove.addEventListener('click', (event) => {
        try {
          axios.delete('/user/' + key).then(getUser);
        } catch (error) {
          console.log(error);
        }
      });

      _div.appendChild(_span);
      _div.appendChild(_buttonEdit);
      _div.appendChild(_buttonRemove);
      _list.appendChild(_div);
    });
  } catch (error) {
    console.error(err);
  }
};
window.onload = getUser;
document
  .getElementById('form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
      const name = event.target.username.value;
      name ? axios.post('/user', { name }).then(getUser) : alert('이름을 입력하세요.');
    } catch (error) {
      console.log(error);
    }
  });
