/**
 * pattern problem solving - print the below pattern where n = 4
 *                  **** 
 *                  ****
 *                  ****
 *                  ****  
 */

function pattern(n) {
    for (let row = 1; row <= n; row += 1) {
        let star = ""
        for (let col = 1; col <= n; col += 1) {
            star += "*"
        }
        console.log('star value-------->>>>>>>', star)
    }
}

pattern(4)
pattern(10)
pattern(20)


