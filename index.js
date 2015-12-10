var slice = [].slice;
/**
 * @Constructor applier.Argument
 * @param id - index of need param in call Applier
*/
function Argument(id) {
    this.id = id;
};
/**
 * @function applt
 * @param fn function, whoose will call in applier with saves args
 * @param [...args] args for call function, if among arguments will be Argument (Abstruction argument), then applier will change it to argument whoose get applier..
 * @return {Applier}
*/
function apply() {
    var args = slice.apply(arguments);
    var fn = args.shift();
    function applier() {
        var lArguments = arguments;
        args.forEach(function (arg, index) {
            if (arg instanceof Argument){
                args[index]=lArguments[arg.id];
            }
        });
        return fn.apply(null, args);
    }
    return applier;
};


apply.Argument = Argument;

module.exports = apply;