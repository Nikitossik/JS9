function saveMarks(form) {

  let group = getGroup() || {};

  let subjects = form.getElementsByClassName("subject"),
    name = form.elements["name"].value,
    marks = {};

  for (let i = 0; i < subjects.length; i++) {
    marks[subjects[i].name] = +subjects[i].value;
  }

  group[name] = marks;

  setGroup(group);

}

function getGroup(){
  return JSON.parse(localStorage.getItem('group'));
}

function setGroup(data){
  return localStorage.setItem('group', JSON.stringify(data));
}

