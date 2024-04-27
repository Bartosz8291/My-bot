// commands.js

// Funkcja obsługująca komendę test
function handleTestCommand(message) {
    message.channel.send('To jest przykładowa komenda test!');
}

module.exports = {
    handleTestCommand: handleTestCommand
};
