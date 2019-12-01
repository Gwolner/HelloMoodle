<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
/*
 * An example of a stand-alone Moodle script.
 *
 * Says Hello, {username}, or Hello {name} if the name is given in the URL.
 *
 * @package   local_hello
 * @copyright 2018 Ahmed Sherif
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

// require config.php
require_once(dirname(__FILE__) . '/../../config.php');

// define the context of the page, for more info read this: https://docs.moodle.org/dev/Page_API#Setting_up_the_page
$context = context_system::instance();

// require the capablilities you have specified in the access.php
require_capability('local/hello:sayhello', $context);

// call require login fucntion so you can use this local module only when you're logged in, for more info read this: https://docs.moodle.org/dev/Access_API#require_login.28.29
require_login();

// creating an optional variable called name and has a value of '' empty string with the type text
$name = optional_param('name', '', PARAM_TEXT);

// if the name is null it will execute this statement
if (!$name) {
    // function will get you the full name of the logged in user
    $name = fullname($USER);
}

// sets the context
$PAGE->set_context($context);

// creating a url for the local module and we could supply a name parameter in the url
$PAGE->set_url(new moodle_url('/local/hello/index.php'),
        array('name' => $name));

// set page title
$PAGE->set_title(get_string('welcome', 'local_hello'));

// outputs the header of moodle
echo $OUTPUT->header();

// outputs the greetings text, get_string gets the string from the language file in lang folder given the module name
// Formate string is an output function that's used to print short names that needs to be filtered
// The third parameter is used to substitute {$a} with a avarible in this case the user name, for more info: https://docs.moodle.org/dev/String_API#get_string.28.29 
echo $OUTPUT->box(get_string('greet', 'local_hello',
        format_string($name)));

// outputs the footer of moodle
echo $OUTPUT->footer();