// Warning: Code is ugly, will fix probably soon

const mainUserName = document.querySelector("#main-user-name");
const editProfile = document.querySelector("#edit-profile-btn");
const acceptBtn = document.querySelectorAll(".accept-btn");
const rejectBtn = document.querySelectorAll(".reject-btn")
var pendingReqCount = document.querySelector("#pending-request-count")
var pendingReqList = document.querySelectorAll(".pending-request-list li")
var friendListCount = document.querySelector("#friend-list-count")
var pendingCount = pendingReqList.length;
var friendsCount = 418;

editProfile.onclick = function() {
    var newName = prompt("Enter your new name:", mainUserName.innerText);
    mainUserName.innerText = newName;
};

acceptBtn[0].onclick = function() {
    pendingReqList[0].remove();
    pendingCount--
    pendingReqCount.innerText = pendingCount;
    friendsCount++
    friendListCount.innerText = friendsCount;
}

acceptBtn[1].onclick = function() {
    pendingReqList[1].remove();
    pendingCount--
    pendingReqCount.innerText = pendingCount
    friendsCount++
    friendListCount.innerText = friendsCount;
}

rejectBtn[0].onclick = function() {
    pendingReqList[0].remove();
    pendingCount--
    pendingReqCount.innerText = pendingCount
}

rejectBtn[1].onclick = function() {
    pendingReqList[1].remove();
    pendingCount--
    pendingReqCount.innerText = pendingCount
}