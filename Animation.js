const codeLines = [
    { code: "print('Hello, World!')", lang: "python" },
    { code: "def foo():", lang: "python" },
    { code: "    return 'bar'", lang: "python" },
    { code: "print(foo())", lang: "python" },
    { code: "local function foo()", lang: "lua" },
    { code: "    return 'bar'", lang: "lua" },
    { code: "end", lang: "lua" },
    { code: "print(foo())", lang: "lua" },
    { code: "for i in range(10):", lang: "python" },
    { code: "    print(i)", lang: "python" },
    { code: "if __name__ == '__main__':", lang: "python" },
    { code: "    main()", lang: "python" },
    { code: "while true do", lang: "lua" },
    { code: "    print('loop')", lang: "lua" },
    { code: "end", lang: "lua" },
    { code: "class MyClass:", lang: "python" },
    { code: "    def __init__(self):", lang: "python" },
    { code: "        self.value = 0", lang: "python" },
    { code: "    def increment(self):", lang: "python" },
    { code: "        self.value += 1", lang: "python" },
    { code: "function love.load()", lang: "lua" },
    { code: "    love.window.setMode(800, 600)", lang: "lua" },
    { code: "end", lang: "lua" },
    { code: "function love.update(dt)", lang: "lua" },
    { code: "    -- update game state", lang: "lua" },
    { code: "end", lang: "lua" },
    { code: "function love.draw()", lang: "lua" },
    { code: "    love.graphics.print('Hello, World!', 400, 300)", lang: "lua" },
    { code: "end", lang: "lua" },
    { code: "def factorial(n):", lang: "python" },
    { code: "    if n == 0:", lang: "python" },
    { code: "        return 1", lang: "python" },
    { code: "    else:", lang: "python" },
    { code: "        return n * factorial(n-1)", lang: "python" },
    { code: "for i in range(5):", lang: "python" },
    { code: "    print(factorial(i))", lang: "python" },
    { code: "function love.keypressed(key)", lang: "lua" },
    { code: "    if key == 'escape' then", lang: "lua" },
    { code: "        love.event.quit()", lang: "lua" },
    { code: "    end", lang: "lua" },
    { code: "end", lang: "lua" }
];

const randomChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createRandomChar() {
    const char = document.createElement('div');
    char.className = 'random-char';
    char.textContent = randomChars[getRandomInt(randomChars.length)];
    char.style.top = `${getRandomInt(window.innerHeight)}px`;
    char.style.left = `${getRandomInt(window.innerWidth)}px`;
    char.style.animationDuration = `${getRandomInt(10) + 5}s`;
    document.querySelector('.code-animation').appendChild(char);

    setTimeout(() => {
        char.remove();
    }, (getRandomInt(10) + 5) * 1000);
}

function createCodeLine() {
    const codeLine = document.createElement('pre');
    const code = document.createElement('code');
    const randomCode = codeLines[getRandomInt(codeLines.length)];
    code.className = `language-${randomCode.lang}`;
    code.textContent = randomCode.code;
    codeLine.className = 'code-line';
    codeLine.style.top = `${getRandomInt(window.innerHeight)}px`;
    codeLine.style.left = `${getRandomInt(window.innerWidth)}px`;
    codeLine.style.animationDuration = `${getRandomInt(10) + 5}s`;
    codeLine.appendChild(code);
    document.querySelector('.code-animation').appendChild(codeLine);
    Prism.highlightElement(code);

    setTimeout(() => {
        codeLine.remove();
    }, (getRandomInt(10) + 5) * 1000);
}

setInterval(createRandomChar, 10);
setInterval(createCodeLine, 1000);