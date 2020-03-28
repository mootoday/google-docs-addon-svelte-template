namespace TextInserter {
  export const insertText = (text: string) => {
    const currentDate = new Date();
    DocumentApp.getActiveDocument().getBody().appendParagraph(`${text} It is ${currentDate.toDateString()}`);
  }
}