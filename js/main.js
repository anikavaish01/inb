// ######## ##     ## ########  ########
// ##        ##   ##  ##     ##    ##
// ##         ## ##   ##     ##    ##
// ######      ###    ########     ##
// ##         ## ##   ##           ##
// ##        ##   ##  ##           ##
// ######## ##     ## ##           ##

// data saving
const FORMAL = true;
const EXPERIMENT_NAME = "inb";
const SUBJ_NUM_SCRIPT = "php/subjNum.php";
const SAVING_SCRIPT = "php/save.php";
const VISIT_FILE = "visit_" + EXPERIMENT_NAME + ".txt";
const SUBJ_NUM_FILE = "subjNum_" + EXPERIMENT_NAME + ".txt";
const ATTRITION_FILE = "attrition_" + EXPERIMENT_NAME + ".txt";
const TRIAL_FILE = "trial_" + EXPERIMENT_NAME + ".txt";
const SUBJ_FILE = "subj_" + EXPERIMENT_NAME + ".txt";
const SAVING_DIR = FORMAL ? "data/formal":"data/testing";
const ID_GET_VARIABLE_NAME = "sonacode"; // XXX (may have to change ID acquistion process if study is posted on Prolific)

// stimuli
const STIM_PATH = "media/";
const TRIAL_PRACTICE_LIST = [{"backgroundImage": "prac_background.png", "stimuli": "prac.png"}];
const PRACTICE_TRIAL_N = TRIAL_PRACTICE_LIST.length;
const RAND_INDEX = SHUFFLE_ARRAY([0, 0, 0, 1, 1, 1]);
const ANIMALS = [
[["animals_resized/angelfish_L.png", "left"], ["animals_resized/angelfish_R.png", "right"]], 
[["animals_resized/donkey_L.png", "left"], ["animals_resized/donkey_R.png", "right"]],
[["animals_resized/hedgehog_L.png", "left"], ["animals_resized/hedgehog_R.png", "right"]],
[["animals_resized/panda_L.png", "left"], ["animals_resized/panda_R.png", "right"]],
[["animals_resized/sparrow_L.png", "left"], ["animals_resized/sparrow_R.png", "right"]],
[["animals_resized/toad_L.png", "left"], ["animals_resized/toad_R.png", "right"]]
];
const NATURAL = [
    [["natural_resized/hibiscus_L.png", "left"], ["natural_resized/hibiscus_R.png", "right"]],
    [["natural_resized/lillies_L.png", "left"], ["natural_resized/lillies_R.png", "right"]],
    [["natural_resized/rose_L.png", "left"], ["natural_resized/rose_R.png", "right"]],
    [["natural_resized/sunflowers_L.png", "left"], ["natural_resized/sunflowers_R.png", "right"]],
    [["natural_resized/lavender_L.png", "left"], ["natural_resized/lavender_R.png", "right"]],
    [["natural_resized/tulips_L.png", "left"], ["natural_resized/tulips_R.png", "right"]]
];
const FURNITURE = [
    [["furniture_resized/chair_L.png", "left"], ["furniture_resized/chair_R.png", "right"]],
    [["furniture_resized/deskchair_L.png", "left"], ["furniture_resized/deskchair_R.png", "right"]],
    [["furniture_resized/dresser_L.png", "left"], ["furniture_resized/dresser_R.png", "right"]],
    [["furniture_resized/lamp_L.png", "left"], ["furniture_resized/lamp_R.png", "right"]],
    [["furniture_resized/piano_L.png", "left"], ["furniture_resized/piano_R.png", "right"]],
    [["furniture_resized/refrigerator_L.png", "left"], ["furniture_resized/refrigerator_R.png", "right"]]
] 
const FACES = [
    [["faces_resized/profile1_L.png", "left"], ["faces_resized/profile1_R.png", "right"]],
    [["faces_resized/profile2_L.png", "left"], ["faces_resized/profile2_R.png", "right"]],
    [["faces_resized/profile3_L.png", "left"], ["faces_resized/profile3_R.png", "right"]],
    [["faces_resized/profile4_L.png", "left"], ["faces_resized/profile4_R.png", "right"]],
    [["faces_resized/profile5_L.png", "left"], ["faces_resized/profile5_R.png", "right"]],
    [["faces_resized/profile6_L.png", "left"], ["faces_resized/profile6_R.png", "right"]]
];
const GAZE = [
    [["gaze_resized/gaze1_L.png", "left"], ["gaze_resized/gaze1_R.png", "right"]],
    [["gaze_resized/gaze2_L.png", "left"], ["gaze_resized/gaze2_R.png", "right"]]
]
const TOOLS = [
    [["tools_resized/flashlight_L.png", "left"], ["tools_resized/flashlight_R.png", "right"]],
    [["tools_resized/hair_dryer_L.png", "left"], ["tools_resized/hair_dryer_R.png", "right"]],
    [["tools_resized/hammer_L.png", "left"], ["tools_resized/hammer_R.png", "right"]],
    [["tools_resized/iron_L.png", "left"], ["tools_resized/iron_R.png", "right"]],
    [["tools_resized/perfume_L.png", "left"], ["tools_resized/perfume_R.png", "right"]],
    [["tools_resized/stapler_L.png", "left"], ["tools_resized/stapler_R.png", "right"]]
]
const VEHICLES = [
    [["vehicles_resized/bicycle_L.png", "left"], ["vehicles_resized/bicycle_R.png", "right"]],
    [["vehicles_resized/boat_L.png", "left"], ["vehicles_resized/boat_R.png", "right"]],
    [["vehicles_resized/golfcart_L.png", "left"], ["vehicles_resized/golfcart_R.png", "right"]],
    [["vehicles_resized/airplane_L.png", "left"], ["vehicles_resized/airplane_R.png", "right"]],
    [["vehicles_resized/scooter_L.png", "left"], ["vehicles_resized/scooter_R.png", "right"]],
    [["vehicles_resized/tractor_L.png", "left"], ["vehicles_resized/tractor_R.png", "right"]]
]
const FILLERS = [
    ["fillers_resized/filler1.png", "n/a"], ["fillers_resized/filler2.png", "n/a"], ["fillers_resized/filler3.png", "n/a"],
    ["fillers_resized/filler4.png", "n/a"], ["fillers_resized/filler5.png", "n/a"], ["fillers_resized/filler6.png", "n/a"], 
    ["fillers_resized/filler7.png", "n/a"], ["fillers_resized/filler8.png", "n/a"], ["fillers_resized/filler9.png", "n/a"],
    ["fillers_resized/filler10.png", "n/a"], ["fillers_resized/filler11.png", "n/a"], ["fillers_resized/filler12.png", "n/a"],
    ["fillers_resized/filler13.png", "n/a"], ["fillers_resized/filler14.png", "n/a"], ["fillers_resized/filler15.png", "n/a"],
    ["fillers_resized/filler16.png", "n/a"], ["fillers_resized/filler17.png", "n/a"], ["fillers_resized/filler18.png", "n/a"],
    ["fillers_resized/filler19.png", "n/a"], ["fillers_resized/filler20.png", "n/a"], ["fillers_resized/filler21.png", "n/a"],
    ["fillers_resized/filler22.png", "n/a"], ["fillers_resized/filler23.png", "n/a"], ["fillers_resized/filler24.png", "n/a"], 
    ["fillers_resized/filler25.png", "n/a"], ["fillers_resized/filler26.png", "n/a"], ["fillers_resized/filler27.png", "n/a"],
    ["fillers_resized/filler28.png", "n/a"], ["fillers_resized/filler29.png", "n/a"], ["fillers_resized/filler30.png", "n/a"],
    ["fillers_resized/filler31.png", "n/a"], ["fillers_resized/filler32.png", "n/a"], ["fillers_resized/filler33.png", "n/a"],
    ["fillers_resized/filler34.png", "n/a"], ["fillers_resized/filler35.png", "n/a"], ["fillers_resized/filler36.png", "n/a"]
]
const STIMULI_LIST = [ANIMALS, NATURAL, FURNITURE, FACES, TOOLS, VEHICLES]
const IMAGES = [];
for (var i = 0; i < RAND_INDEX.length; i++){
    for (var j = 0; j < STIMULI_LIST.length; j++){
        IMAGES.push(STIMULI_LIST[j][i][RAND_INDEX[i]]);
    }
}
for (var i = 0; i < FILLERS.length; i++){
    IMAGES.push(FILLERS[i]);
}
const BACKGROUND_IMAGES = [
    "background/light_blue_background.jpg",
];
const TRIAL_LIST = GENERATE_TRIAL_LIST(IMAGES, BACKGROUND_IMAGES)
const TRIAL_IMG_LIST = SHUFFLE_ARRAY(TRIAL_LIST);
const TRIAL_N = TRIAL_IMG_LIST.length;
const INSTR_TRIAL_N = PRACTICE_TRIAL_N + TRIAL_N;
const INTERTRIAL_INTERVAL = 0.5;
const INSTR_IMG_LIST = ["maximize_window.png", "prac.png", "prac_background.png"];
const ALL_IMG_LIST = GENERATE_IMG_LIST(IMAGES, BACKGROUND_IMAGES).concat(INSTR_IMG_LIST);

// criteria
const VIEWPORT_MIN_W = 800;
const VIEWPORT_MIN_H = 600;
const INSTR_READING_TIME_MIN = 0.3;

// stimuli
let image_original_pos_x = 0;
let image_original_pos_y = 0;
const FRAME_WIDTH = 800;
const FRAME_HEIGHT = 350;

// object variables
var instr, subj, trial;

$(document).ready(()=>{
    subj = new subjObject(subj_options);
    subj.id = subj.getID(ID_GET_VARIABLE_NAME);
    subj.saveVisit();
    if (subj.phone) {
        HALT_EXPERIMENT("It seems that you are using a touchscreen device or a phone. Please use a laptop or desktop instead.<br /><br />If you believe you have received this message in error, please contact the experimenter at yichiachen@ucla.edu<br /><br />Otherwise, please switch to a laptop or a desktop computer for this experiment.");
    } else if (subj.valid_id){
        LOAD_IMG(0, STIM_PATH, ALL_IMG_LIST, function() {});
        instr = new instrObject(instr_options);
        trial_options["subj"] = subj;
        trial = new trialObject(trial_options);
        instr.start();
    }
});

//  ######  ##     ## ########        ## ########  ######  ########
// ##    ## ##     ## ##     ##       ## ##       ##    ##    ##
// ##       ##     ## ##     ##       ## ##       ##          ##
//  ######  ##     ## ########        ## ######   ##          ##
//       ## ##     ## ##     ## ##    ## ##       ##          ##
// ##    ## ##     ## ##     ## ##    ## ##       ##    ##    ##
//  ######   #######  ########   ######  ########  ######     ##

const SUBJ_TITLES = [
    "num",
    "date",
    "startTime",
    "id",
    "userAgent",
    "endTime",
    "duration",
    "quizAttemptN",
    "instrReadingTimes",
    "quickReadingPageN",
    "hiddenCount",
    "hiddenDurations",
    "seen",
    "letter",
    "aqResponses",
    "aqRt",
    "serious",
    "maximized",
    "problems",
    "gender",
    "age",
    "inView",
    "viewportW",
    "viewportH"
];

function UPDATE_TRIAL_OBJECT_SUBJ_NUM() {
    if (typeof trial !== "undefined"){
        trial.num = subj.num;
    }
}

function HANDLE_VISIBILITY_CHANGE() {
    if (document.hidden) {
        subj.hiddenCount += 1;
        subj.hiddenStartTime = Date.now();
    } else  {
        subj.hiddenDurations.push((Date.now() - subj.hiddenStartTime)/1000);
    }
}

function SUBMIT_DEBRIEFING_Q() {
    const CHOICE_ATTRIBUTE_NAMES = ["serious", "maximized", "gender"];
    const OPEN_ENDED_ATTRIBUTE_NAMES = ["problems", "age"];
    for (let q of CHOICE_ATTRIBUTE_NAMES) {
        subj[q] = $("input[name="+q+"]:checked").val();
        if(!CHECK_IF_RESPONDED([], [subj[q]])){
            $("#"+q+"-warning").css("visibility", "visible");
        }else{
            $("#"+q+"-warning").css("visibility", "hidden");
        }
    }
    for (let q of OPEN_ENDED_ATTRIBUTE_NAMES) {
        subj[q] = $("#"+q).val();
        if(!CHECK_IF_RESPONDED([subj[q]], [])){
            $("#"+q+"-warning").css("visibility", "visible");
        }else{
            $("#"+q+"-warning").css("visibility", "hidden");
        }
    }

    const OPEN_ENDED_LIST = [subj.problems, subj.age];
    const CHOICE_LIST = [subj.serious, subj.gender, subj.maximized];
    const ALL_RESPONDED = CHECK_IF_RESPONDED(OPEN_ENDED_LIST, CHOICE_LIST);
    if (ALL_RESPONDED) {
        for (var i = 0; i < OPEN_ENDED_LIST.length; i++) {
            subj[OPEN_ENDED_ATTRIBUTE_NAMES[i]] = subj[OPEN_ENDED_ATTRIBUTE_NAMES[i]].replace(/(?:\r\n|\r|\n)/g, '<br />');
        }
        subj.quizAttemptN = instr.quizAttemptN['onlyQ'];
        subj.instrReadingTimes = JSON.stringify(instr.readingTimes);
        subj.quickReadingPageN = Object.values(instr.readingTimes).filter(d => d < INSTR_READING_TIME_MIN).length;
        subj.aqResponses = JSON.stringify(subj.aqResponses);
        subj.aqRt = JSON.stringify(subj.aqRt);
        subj.submitQ();
        $('#questions-box').hide();
        ALLOW_SELECTION();
        EXIT_MAXIMIZE_WINDOW();
        $('#debriefing-box').show();
        $('body').scrollTop(0);
    }
}

function ALLOW_SELECTION() {
    $("body").css({
        "-webkit-user-select":"text",
        "-moz-user-select":"text",
        "-ms-user-select":"text",
        "user-select":"text"
    });
}

function END_SONA() {
    window.location.href = "https://ucla.sona-systems.com/webstudy_credit.aspx?experiment_id=2007&credit_token=91376aea067444d6b06a3c0a5e12593f&survey_code="+subj.id;
}

function AJAX_FAILED() {
    HALT_EXPERIMENT("Oops! An error has occurred. Please email the experimenter yichiachen@g.ucla.edu with the message “AJAX_ERR” to receive credit. Sorry!");
    // XXX (may have to switch "credit" to "payment" if posted on Prolific)
}

function HALT_EXPERIMENT(explanation) {
    $(".page-box").hide();
    $("#instr-text").html(explanation);
    $("#next-button").hide();
    $("#instr-box").show();
}

var subj_options = {
    titles: SUBJ_TITLES,
    viewportMinW: VIEWPORT_MIN_W,
    viewportMinH: VIEWPORT_MIN_H,
    subjNumCallback: UPDATE_TRIAL_OBJECT_SUBJ_NUM,
    subjNumScript: SUBJ_NUM_SCRIPT,
    savingScript: SAVING_SCRIPT,
    subjNumFile: SUBJ_NUM_FILE,
    visitFile: VISIT_FILE,
    attritionFile: ATTRITION_FILE,
    subjFile: SUBJ_FILE,
    savingDir: SAVING_DIR,
    handleVisibilityChange: HANDLE_VISIBILITY_CHANGE
};

// #### ##    ##  ######  ######## ########
//  ##  ###   ## ##    ##    ##    ##     ##
//  ##  ####  ## ##          ##    ##     ##
//  ##  ## ## ##  ######     ##    ########
//  ##  ##  ####       ##    ##    ##   ##
//  ##  ##   ### ##    ##    ##    ##    ##
// #### ##    ##  ######     ##    ##     ##

const MAIN_INSTRUCTIONS_ARR = [
    [false, false, "Thank you for participating!<br /><br />This study will take about 10 minutes. Please read the instructions carefully, and avoid using the refresh or back buttons."],
    [false, false, "In this experiment, I am interested in what “looks good” to you. In particular, how the framing of an image influences your aesthetic experience."],
    [SHOW_MAXIMIZE_WINDOW, false, "For this study to work, the webpage will automatically switch to the full-screen view on the next page. Please stay in the full screen mode until the study automatically switches out from it."],
    [SHOW_TRIAL_IMG, MAXIMIZE_WINDOW, "In this experiment, you will view an image in a frame (as in the example below). There will be a figure (an object, animal, or person) in the image."],
    [HIDE_TRIAL_IMG, false, "Your job is to make the image look as good as possible to you by adjusting the horizontal position of the figure in it."],
    [false, false, "That means, you will drag the figure left or right to move it within the image and drop it wherever you think makes the image look visually pleasing."],
    [false, false, "You will first practice this " + PRACTICE_TRIAL_N +" time, and do this seriously " + TRIAL_N + " times after."],
    [false, false, "Sounds good? The next page is a quick instruction quiz. (It's very simple!)"],
    [false, SHOW_INSTR_QUESTION, ""],
    [SHOW_CONSENT, false, "Great! We are going to start now. Make sure to stay focused (e.g., don't switch to other windows or tabs!)! Press SPACE when you are ready. "]
];

function SHOW_INSTR_IMG(file_name) {
    $("#instr-img").attr("src", STIM_PATH + file_name);
    $("#instr-img").css("display", "block");
}

function SHOW_TRIAL_IMG() {
    $("#instr-img").hide()
    $("#instr-test-frame").show()
}

function HIDE_INSTR_IMG() {
    $("#instr-img").css("display", "none");
}

function HIDE_TRIAL_IMG() {
    $("#instr-test-frame").css("display", "none");
}

function SHOW_MAXIMIZE_WINDOW() {
    SHOW_INSTR_IMG("maximize_window.png");
}

function SHOW_INSTR_QUESTION() {
    $("#instr-box").hide();
    $("#quiz-box").show();
}

function SUBMIT_INSTR_Q() {
    const CHOICE = $('input[name="quiz"]:checked').val();
    if (typeof CHOICE === "undefined") {
        $("#quiz-warning").text("Please answer the question. Thank you!");
    } else if (CHOICE != "horizontally") {
        instr.quizAttemptN["onlyQ"] += 1;
        instr.saveReadingTime();
        $("#instr-text").text("You have given an incorrect answer. Please read the instructions again carefully.");
        $("#instr-box").show();
        $("#quiz-box").hide();
        $('input[name="quiz"]:checked').prop("checked", false);
        instr.index = -1;
    } else {
        instr.next();
        $("#quiz-box").hide();
    }
}

function SHOW_CONSENT() {
    $("#next-button").hide();
    $("#consent-box").show();
    $(document).keyup(function(e) {
        if (e.key == " ") {
            $(document).off("keyup");
            instr.saveReadingTime();
            $("#instr-box").hide();
            $("#consent-box").hide()
            subj.saveAttrition();
            SHOW_TRIAL();
        }
    });
}

var instr_options = {
    textBox: $("#instr-box"),
    textElement: $("#instr-text"),
    arr: MAIN_INSTRUCTIONS_ARR,
    quizConditions: ["onlyQ"]
};


// ########    ###     ######  ##    ##
//    ##      ## ##   ##    ## ##   ##
//    ##     ##   ##  ##       ##  ##
//    ##    ##     ##  ######  #####
//    ##    #########       ## ##  ##
//    ##    ##     ## ##    ## ##   ##
//    ##    ##     ##  ######  ##    ##

const TRIAL_TITLES = [
    "num",
    "date",
    "subjStartTime",
    "trialNum",
    "facingDir",
    "stimName",
    "background",
    "inView",
    "imagAdj",
    "rt"
];

function SHOW_TRIAL() {
    $("#task-box").show();
    subj.detectVisibilityStart();
    trial.run();
}

function TRIAL_UPDATE(formal_trial, last, this_trial, next_trial, path) {
    $("#trial-progress").text(trial.progress);
    $("#exp-button").prop("disabled",true);

    trial.stimName = this_trial.stimuli;
    trial.background = this_trial.backgroundImage;
    trial.facingDir = this_trial.direction;
    trial.imagAdj = 0

    $("#test-frame").css("background-image", "url(" + path + this_trial.backgroundImage + ")");
    $("#test-img").attr("src", path + this_trial.stimuli);
    $("#test-img").on("load", function() {
        $("#test-img").css("left", (FRAME_WIDTH/2)-(this.naturalWidth/2));
        image_original_pos_x = (FRAME_WIDTH/2)-(this.naturalWidth/2)
        $("#test-img").css("top", (FRAME_HEIGHT/2)-(this.naturalHeight/2));
        image_original_pos_y = (FRAME_HEIGHT/2)-(this.naturalHeight/2)
    });
    $("#test-img").click(ADJUST_IMAGE);

    if(!last){
        $("#buffer-frame").css("background-image", "url("+ path + next_trial.backgroundImage+")");
        $("#bufferImg").attr("src", path + next_trial.stimuli);
    }

    // Make image draggable
    $("#test-img").draggable({
        containment: "parent",
        axis: "x",
    });
}

const ADJUST_IMAGE = () =>{
    let imagePosX = $("#test-img").position().left;
    trial.imagAdj = imagePosX - image_original_pos_x;
    $("#exp-button").prop("disabled",false);
}

function TRIAL() {
    $("#test-frame").css("visibility", "visible");
    trial.inView = CHECK_FULLY_IN_VIEW($("#test-img"));
}

function END_TRIAL() {
    $("#test-frame").css("visibility", "hidden");
    trial.end();
}

function END_EXPT() {
    $("#task-box").hide();
    trial.save();
    $("#questions-box").show();
    subj.detectVisibilityEnd();
}

var trial_options = {
    titles: TRIAL_TITLES,
    pracTrialN: PRACTICE_TRIAL_N,
    trialN: TRIAL_N,
    savingScript: SAVING_SCRIPT,
    dataFile: TRIAL_FILE,
    stimPath: STIM_PATH,
    savingDir: SAVING_DIR,
    trialList: TRIAL_IMG_LIST,
    pracList: TRIAL_PRACTICE_LIST,
    intertrialInterval: INTERTRIAL_INTERVAL,
    updateFunc: TRIAL_UPDATE,
    trialFunc: TRIAL,
    endExptFunc: END_EXPT,
    progressInfo: true
};
