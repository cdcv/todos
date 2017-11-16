#Story Structure

##Each story element has the following characteristics
- Content: Text
- Media: image/video/audio file
- Location: Left/Right/Center
- Name: Character name.  Narrator = blank.
- Pause before: in ms

Later?
- ResponseOptions: if user can choose a response

#Storage Logic
- A 'story' is stored as a json for each language
- The json is made up of elements

#Algorithm Logic

- Keep track of the element #
- Keep track of language
- Keep track of textstory

- for i=0 to element number
- read element from corresponding language table in db
- add all of the elements to the output reactive variable
- display the variable

- Each time the user clicks, increase the element number

