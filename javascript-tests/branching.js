const height = 5;
    if (height >= 25) {
        console.log('We have a big one');
    } else {
        console.log('We have a little one');
    } else {
        console.log('We have a negative number or invalid number')
    }

    height = 'little';

    switch(height) {
        case 'little':
            console.log('Switch: a little one is smaller than five');
            break;
    
        case ('big'):
            console.log('Switch: a big one is five or greater');
            break;
    
        default:
            console.log('We do not know about this one.')
    }
    window.onload = () => {
        const simpleBranchAction = document.getElementById('simpleBranchAction');
        const simpleBranchDisplay = document.getElementById('simpleBranchDisplay');
        
        simpleBranchAction.onclick = (event) => {
            let height = 24;
            if (height >= 25) {
                simpleBranchDisplay.textContent = 'We have a big one';
            } else {
                simpleBranchDisplay.textContent = 'We have a little one';
            }   
        }
    }                