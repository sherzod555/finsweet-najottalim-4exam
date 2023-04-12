function validateForm() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    
    if (!firstName || !lastName || !username || !password || !confirmPassword) {
      alert("Please fill out all fields");
      return false;
    }
    
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }
    
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
    
    return true;
  }