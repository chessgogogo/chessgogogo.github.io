class ConsoleExtension {
  getInfo() {
    return {
      id: 'oeildlconsole',
      name: 'Console',
        color1: '#e60f0f', //couleur des blocs
        color2: '#a20404', //bordure de l'icone dans la cat茅gorie
        color3: '#a20404', //contour des blocs
      blocks: [
        {
          opcode: 'error',
          blockType: Scratch.BlockType.COMMAND,
          text: '错误error [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          }
        },

        {
          opcode: 'warning',
          blockType: Scratch.BlockType.COMMAND,
          text: '警告warning [TWO]',
          arguments: {
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          }
        },

        {
          opcode: 'info',
          blockType: Scratch.BlockType.COMMAND,
          text: 'info [THREE]',
          arguments: {
            THREE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          }
        },
        
        {
          opcode: 'log',
          blockType: Scratch.BlockType.COMMAND,
          text: 'log [FOUR]',
          arguments: {
            FOUR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          }
        },
        
        {
          opcode: 'clear',
          blockType: Scratch.BlockType.COMMAND,
          text: 'clear console'
        },
        '---',
        {
          opcode: 'group',
          blockType: Scratch.BlockType.COMMAND,
          text: 'group with title [FIVE]',
          arguments: {
            FIVE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          }
        },

        {
          opcode: 'ungroup',
          blockType: Scratch.BlockType.COMMAND,
          text: 'quit group'
        },
        '---',
        {
          opcode: 'timer',
          blockType: Scratch.BlockType.COMMAND,
          text: 'start timer named [SIX]',
          arguments: {
            SIX: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          }
        },
        
        {
          opcode: 'timerlog',
          blockType: Scratch.BlockType.COMMAND,
          text: 'display timer named [SEVEN]',
          arguments: {
            SEVEN: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          }
        },

        {
          opcode: 'timerstop',
          blockType: Scratch.BlockType.COMMAND,
          text: 'stop timer named [EIGHT]',
          arguments: {
            EIGHT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          }
        },
        
      ]
    };
  }
  error(args) {
    console.error(args.ONE);
  }

  warning(args) {
    console.warn(args.TWO);
  }

  info(args) {
    console.info(args.THREE);
  }

  log(args) {
    console.log(args.FOUR);
  }

  clear() {
    console.clear();
  }

  group(args) {
    console.group(args.FIVE);
  }

  ungroup() {
    console.groupEnd();
  }

  timer(args) {
    console.time(args.SIX);
  }

  timerlog(args) {
    console.timeLog(args.SEVEN);
  }

  timerstop(args) {
    console.timeEnd(args.EIGHT);
  }

}
Scratch.extensions.register(new ConsoleExtension());
