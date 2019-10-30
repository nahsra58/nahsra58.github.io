const height = 5;

if (height >= 5) {
    console.log('we have a big one')
}
const height = 3;
if (height >= 5) {
    console.log('We have a big one');
} else {
    console.log('We have a little one');
}
window.onload = () => {
    const simpleBranchAction = document.getElementById('simpleBranchAction');
    const simpleBranchDisplay = document.getElementById('simpleBranchDisplay');
    
    simpleBranchAction.onclick = (event) => {
        let height = 4;
        if (height >= 5) {
            simpleBranchDisplay.textContent = 'We have a big one';
        } else {
            simpleBranchDisplay.textContent = 'We have a little one';
        }   
    }
}                