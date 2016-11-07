/**
 * Core Definitions file
 *
 * @author Jim Chen
 * @description Definitions file for interfaces used in CCL
 */

/**
 * Definintions for binary array tools
 */
interface IBinArray {
    /**
     * Binary insert into array
     * @param arr - target array
     * @param inserted - element to be inserted
     * @param how - comparison function
     */
    binsert(arr:Array<any>, inserted:any, how:Function):number;
    /**
     * Binary loose search
     * @param arr - array to look in
     * @param what - object to try to find
     * @param how - comparison function
     */
    bsearch(arr:Array<any>, what:any, how:Function):number;
}
declare var BinArray:IBinArray;

interface CCLOptions {
    global:{
        scale: number;
        opacity: number;
        className: string;
    }
    scroll:{
        scale:number;
        opacity:number;
    }
}

interface ICommentFactory {
    (comment:Object):IComment;
}

interface ICommentManager {
    width:number;
    height:number;
    options:CCLOptions;
    /**
     * Cleanup the given comment since it has finished
     * @param c - IComment
     */
    finish(c:IComment):void;
}

/**
 * Easable motion on a certain parameter
 */
interface IMotion {
    from:number;
    to:number;
    delay:number;
    dur:number;
    ttl:number;
    easing:Function;
}

interface IComment {
    dom:any;
    stime:number;
    dur:number;
    ttl:number;
    cindex:number;
    align:number;
    axis:number;
    x:number;
    y:number;
    bottom:number;
    right:number;
    width:number;
    height:number;
    movable:boolean;
    border:boolean;
    shadow:boolean;
    font:string;
    color:number;
    alpha:number;
    size:number;
    time(t:number):void;
    update():void;
    invalidate():void;
    animate():void;
}
