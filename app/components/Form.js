const d = document;

export function Form() {
    return `
        <form id="form" class="form" action="submit">
            <h2 class="form-title">CONTACT</h2>
            <input id="name" name="name" class="form-input" autocomplete="off" placeholder="Name.." type="text" title="Name can only contain letters (4 to 15)" required>
            <input id="email" name="email" class="form-input" autocomplete="off" placeholder="Email.." type="email" title="Must be a valid email" required>
            <input id="subject" name="subject" class="form-input" autocomplete="off" placeholder="Subject.." type="text">
            <textarea id="textarea" placeholder="Leave a comment.." name="comment" class="form-input form-textarea" rows="10" cols="30" title="Comment length should not exceed 255 characters" required></textarea> 
            <div class="form-buttons">
                <div class="form-buttons-media">
                    <button id="btn-github" class="form-buttons-media-github"><img src="/app/assets/img/github-light.png"></button>
                    <button id="btn-linkedin" class="form-buttons-media-linkedin"><img src="/app/assets/img/linkedin-light.png"></button>
                </div>
                <input type="submit" id="form-submit" class="form-buttons-submit" value="SUBMIT">
            </div>

        </form>
    ` 
}