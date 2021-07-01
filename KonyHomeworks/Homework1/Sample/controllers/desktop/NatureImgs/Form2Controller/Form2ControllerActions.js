define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRila **/
    AS_Button_f8a64788f5d74447be463cf7643e9af0: function AS_Button_f8a64788f5d74447be463cf7643e9af0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("NatureImgs/Form1");
        ntf.navigate();
    },
    /** onTouchStart defined for imgRila **/
    AS_Image_j5e448f5076f4a9fad63a67ad56a0b59: function AS_Image_j5e448f5076f4a9fad63a67ad56a0b59(eventobject, x, y) {
        var self = this;

        function ROTATE_ACTION____a4fa5be442254ad5b016f75209d39595_Callback() {}
        var trans100 = kony.ui.makeAffineTransform();
        trans100.rotate(180);
        self.view.imgRila.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": ROTATE_ACTION____a4fa5be442254ad5b016f75209d39595_Callback
        });
    },
    /** onTouchEnd defined for imgRila **/
    AS_Image_h8cf010af11b48608c07f53c4e595df9: function AS_Image_h8cf010af11b48608c07f53c4e595df9(eventobject, x, y) {
        var self = this;

        function ROTATE_ACTION____bcec5b9df524471b84c5ae9155816129_Callback() {}
        var trans100 = kony.ui.makeAffineTransform();
        trans100.rotate(360);
        self.view.imgRila.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": ROTATE_ACTION____bcec5b9df524471b84c5ae9155816129_Callback
        });
    }
});