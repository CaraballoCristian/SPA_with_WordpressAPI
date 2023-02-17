export function Form() {
    return `
        <form id="form" class="form" action="submit">
            <h2 class="form-title">Just say Hello!</h2>
            <div class="form-top">
                <label class="form-input-box">
                    <input id="firstname" name="firstname" class="form-input-box-input form-input" autocomplete="off" placeholder="First Name.." type="text" title="FirstName can only contain letters (4 to 15)" required>
                </label>
                <label class="form-input-box">
                    <input id="lastname" name="lastname" class="form-input-box-input form-input" autocomplete="off" placeholder="Last Name.." type="text" title="Last Name can only contain letters (4 to 15)" required>
                </label>
            </div>
            <div class="form-middle">
                <label class="form-input-box">
                    <input id="email" name="email" class="form-input-box-input form-input" autocomplete="off" placeholder="Email.." type="email" title="Must be a valid email" required>
                </label>
                <label class="form-input-box">
                    <input id="subject" name="subject" class="form-input-box-input form-input" autocomplete="off" placeholder="Subject.." type="text">
                </label>
            </div>
            <div class="form-bottom">
                <textarea id="textarea" placeholder="Leave a comment.." name="comment" class="form-input form-bottom-textarea" rows="10" cols="30" title="Comment length should not exceed 255 characters" required></textarea> 
            </div>
            <div class="form-button">
                <input type="submit" id="form-submit" class="form-button-submit" value="SUBMIT">
            </div>

        </form>
    ` 
}