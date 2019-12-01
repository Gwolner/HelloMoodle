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
/**
 * Capability definitions for the example Moodle script.
 *
 * @package   local_hello
 * @copyright 2018 Ahmed Sherif
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * Hint: To undestand the structure well read this: https://docs.moodle.org/dev/Activity_modules#access.php
 * Hint: You may also want to check this: https://docs.moodle.org/dev/NEWMODULE_Adding_capabilities
 */

// It must be included from a Moodle page
defined('MOODLE_INTERNAL') || die();

$capabilities = array(
    'local/hello:sayhello' => array(
        'captype'      => 'read',
        'contextlevel' => CONTEXT_SYSTEM,
        'archetypes'   => array(
            'guest' => CAP_ALLOW,
            'user'  => CAP_ALLOW,
            'admin' => CAP_ALLOW
        ),
    )
);