function hiddenSections() {
  const $contacts = document.querySelector('.contacts'),
      $social = document.querySelector('.social'),
      $profile = document.querySelector('.profile'),
      $education = document.querySelector('.education'),
      $skills = document.querySelector('.skills'),
      $experience = document.querySelector('.experience'),
      $certificates = document.querySelector('.certificates'),
      $references = document.querySelector('.references'),
      $languages = document.querySelector('.languages'),
      $interests = document.querySelector('.interests')

$social.style.display = "none"
$references.style.display = "none"

}


export default hiddenSections;