const d = document;

export function Form() {
    return `
        <form id="form" class="form" action="submit">
            <h2 class="form__title">CONTACT</h2>
            <input id="name" name="name" class="form__input" placeholder="Name.." type="text" title="Name can only contain letters (4 to 15)" required>
            <input id="email" name="email" class="form__input" placeholder="Email.." type="email" title="Must be a valid email" required>
            <input id="subject" name="subject" class="form__input" placeholder="Subject.." type="text">
            <textarea id="textarea" placeholder="Leave a comment.." name="comment" class="form__input form__textarea" rows="10" cols="30" title="Comment length should not exceed 255 characters" required></textarea> 
            <div class="form__buttons">
                <div class="form__buttons-media">
                    <button class="form__buttons-media-github"><img src="/app/assets/img/github-light.png"></button>
                    <button class="form__buttons-media-linkedin"><img src="/app/assets/img/linkedin-light.png"></button>
                </div>
                <input type="submit" id="form__submit" class="form__buttons-submit" value="SUBMIT">
            </div>

        </form>
    ` 
}