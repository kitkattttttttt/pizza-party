//% color=#fe6e5f icon="\uf1ce"
namespace pizza {
    // Make sure not to remove later player when earlier player tested
    export let playersConnected=0;
    //% blockId=set_players
    //% block="set game for $num player(s) with $list"
    //% num.defl=1
    //% list.shadow=variables_get
    //% list.defl=characters
    export function setPlayersWith(list: Image[], num: number) {
        if(num >= pizza.playersConnected){
            pizza.playersConnected = num;
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            let xloc = [
            40,
            120,
            40,
            120
            ]
            let yloc = [
            30,
            30,
            90,
            90
            ]
            for (let index = 0; index < num; index++) {
                if (index + 1 <= list.length){
                    mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(list[index], SpriteKind.Player))
                    mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
                    mp.getPlayerSprite(mp.getPlayerByIndex(index)).setPosition(xloc.shift(), yloc.shift())
                    mp.getPlayerSprite(mp.getPlayerByIndex(index)).z = 1000
                    mp.moveWithButtons(mp.getPlayerByIndex(index))
                }
            }
        }
    }
    //% blockId=bump_sprite
    //% block="$thisSprite bump $thatSprite"
    //% thisSprite.shadow=variables_get
    //% thisSprite.defl=sprite
    //% thatSprite.shadow=variables_get
    //% thatSprite.defl=otherSprite
    export function bumpSprite(thisSprite: Sprite, thatSprite: Sprite) {
        thatSprite.setPosition((thisSprite.x + 80) % 160, thisSprite.y)
    }
}
namespace logic{
    /**
    * this just holds code
    */
    //% block="check if A button pressed"  weight=300
    //% handlerStatement=1
    export function wrap1(handler: () => void) {
        handler();
    }
}