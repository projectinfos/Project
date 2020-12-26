
$(document).ready(function () {

    load_json_data('analysis');

    function load_json_data(id, parent_id) {
        var html_code = '';
        $.getJSON('analysis.json', function (data) {

            html_code += '<option value="">Select ' + id + '</option>';
            $.each(data, function (key, value) {
                if (id == 'analysis') {
                    if (value.parent_id == '0') {
                        html_code += '<option value="' + value.id + '">' + value.analysis + '</option>';

                    }
                }
                else {
                    if (value.parent_id == parent_id) {
                        html_code += '<option value="' + value.id + '">' + value.analysis + '</option>';
                    }
                }


            });
            $('#' + id).html(html_code);

        });

    }
    $(document).on('change', '#analysis', function () {
        var analysis_id = $(this).val();
        if (analysis_id != '') {
            load_json_data('subAnalysis', analysis_id);

        }
        else {
            $('#subAnalysis').html('<option value="">Select sub analysis</option>');

        }
    });
    $('#analysis').change(function () {
        var y = this.options[this.selectedIndex].text;
        $("#analysis").replaceWith("<div class=\"form-control input-lg\">" + y + "<span> <a class=\"link text-right\" href=\"analysis.html\">Change</a>" + "</span>");



    });






    $('#subAnalysis').change(function () {
        var x = this.options[this.selectedIndex].text;
        $(".fill").append("Please fill the following");
        var element = $("#subAnalysis");
        $("#subAnalysis").replaceWith("<div class=\"form-control input-lg\">" + x + "<span> <a class=\"link text-right\" href=\"analysis.html\">Change</a>" + "</span>");


        if (element.hasClass("first") && x != 'Select all' && x != 'Select all details' && x != 'Select All' && x != 'Select all of them') {
            $(".name").append("<div>Select your gender</div>");
            $(".name").append('<input type="radio" id="male" name="sex" value="male"><label for="male"> Male</label>');
            $(".name").append('<input type="radio" id="female" name="sex" value="female"><label for="female"> Female</label>'); $(".name").append("<div>Enter your age</div>");
            $(".name").append('<input type="text" placeholder="Enter your age"/><span class="mu">Year</span>');

            $(".name").append("<div>Enter your result</div>");
            $(".name").append('<input type="text"/><span class="mu">U/L</span>');
            $(".myBtn").append('<input type="submit" class="submitbtn">');
            element.removeClass("first");

        }

        else if (element.hasClass("first") && x === 'Select all') {
            $(".name").append("<div>Select your gender</div>");
            $(".name").append('<input type="radio" id="male" name="sex" value="male"><label for="male"> Male</label>');
            $(".name").append('<input type="radio" id="female" name="sex" value="female"><label for="female"> Female</label>');
            $(".name").append("<div>Enter your age</div>");
            $(".name").append('<input type="text" placeholder="Enter your age"/><span class="mu">Year</span>')
            $(".name").append("<div>Result of Fasting blood glucose</div>");
            $(".name").append('<input type="text"/><span class="mu">mg/dL</span>');
            $(".name").append("<div>Result of 2hrs Postprandial Glucose</div>");
            $(".name").append('<input type="text"/><span class="mu">mg/dL</span>');
            $(".name").append("<div>Result of Glycosylated Hb (HbAIC)</div>");
            $(".name").append('<input type="text"/><span class="mu">mg/dL</span>');
            $(".myBtn").append('<input type="submit" class="submitbtn">');
            element.removeClass("first");

        }
        else if (element.hasClass("first") && x === 'Select all details') {
            $(".name").append("<div>Select your gender</div>");
            $(".name").append('<input type="radio" id="male" name="sex" value="male"><label for="male"> Male</label>');
            $(".name").append('<input type="radio" id="female" name="sex" value="female"><label for="female"> Female</label>');
            $(".name").append("<div>Enter your age</div>");
            $(".name").append('<input type="text" placeholder="Enter your age"/><span class="mu">Year</span>')
            $(".name").append("<div>Result Bilirubin</div>");
            $(".name").append('<input type="text"/><span class="mu">μmol/L</span>');
            $(".name").append("<div>Result of ALT</div>");
            $(".name").append('<input type="text"/><span class="mu">IU/L</span>');
            $(".name").append("<div>Result of AST</div>");
            $(".name").append('<input type="text"/><span class="mu">U/L</span>');
            $(".name").append("<div>Result of PT</div>");
            $(".name").append('<input type="text"/><span class="mu">Inch</span>');
            $(".name").append("<div>Result of Albumin</div>");
            $(".name").append('<input type="text"/><span class="mu">g/dL/L</span>');
            $(".name").append("<div>Result of GGT</div>");
            $(".name").append('<input type="text"/><span class="mu">U/L</span>');
            $(".name").append("<div>Result of Total Protein</div>");
            $(".name").append('<input type="text"/><span class="mu">g/dL</span>');
            $(".name").append("<div>Result of Alkaline Phosphatase</div>");
            $(".name").append('<input type="text"/><span class="mu">U/L</span>');
            $(".myBtn").append('<input type="submit" class="submitbtn">');
            element.removeClass("first");

        }
        else if (element.hasClass("first") && x === 'Select All') {
            $(".name").append("<div>Select your gender</div>");
            $(".name").append('<input type="radio" id="male" name="sex" value="male"><label for="male"> Male</label>');
            $(".name").append('<input type="radio" id="female" name="sex" value="female"><label for="female"> Female</label>');
            $(".name").append("<div>Enter your age</div>");
            $(".name").append('<input type="text" placeholder="Enter your age"/><span class="mu">Year</span>')
            $(".name").append("<div>Result of Bleeding time (BT)</div>");
            $(".name").append('<input type="text"/>');
            $(".name").append("<div>Result of Clotting time (CT)</div>");
            $(".name").append('<input type="text"/>');
            $(".name").append("<div>Result of Prothrombin time (PT)</div>");
            $(".name").append('<input type="text"/>');
            $(".name").append("<div>Result of PT</div>");
            $(".name").append('<input type="text"/>');
            $(".name").append("<div>Result of PTT</div>");
            $(".name").append('<input type="text"/>');
            $(".name").append("<div>Result of Platelets count</div>");
            $(".name").append('<input type="text"/>');
            $(".name").append("<div>Result of Fibrinogen level</div>");
            $(".name").append('<input type="text"/>');
            $(".name").append("<div>Result of Fibrinogen Degradation Products</div>");
            $(".name").append('<input type="text"/>');

            $(".myBtn").append('<input type="submit" class="submitbtn">');
            element.removeClass("first");

        }
        else if (element.hasClass("first") && x === 'Select all of them') {
            $(".name").append("<div>Select your gender</div>");
            $(".name").append('<input type="radio" id="male" name="sex" value="male"><label for="male"> Male</label>');
            $(".name").append('<input type="radio" id="female" name="sex" value="female"><label for="female"> Female</label>');
            $(".name").append("<div>Enter your age</div>");
            $(".name").append('<input type="text" placeholder="Enter your age"/><span class="mu">Year</span>')
            $(".name").append("<div>Result of R.B.C</div>");
            $(".name").append('<input type="text"/>');
            $(".name").append("<div>Result of W.B.C</div>");
            $(".name").append('<input type="text"/>');
            $(".name").append("<div>Result of MCHC</div>");
            $(".name").append('<input type="text"/>');
            $(".name").append("<div>Result of HTC</div>");
            $(".name").append('<input type="text"/>');
            $(".name").append("<div>Result of PLT</div>");
            $(".name").append('<input type="text"/>');
            $(".myBtn").append('<input type="submit" class="submitbtn">');

            element.removeClass("first");

        }




    });










});

