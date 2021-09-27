import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-string-pattern',
  templateUrl: './string-pattern.component.html',
  styleUrls: ['./string-pattern.component.scss'],
})
export class StringPatternComponent implements OnInit {
  /**
   * Initialization of form, that aggregates the values of each child FormControl into one object, with each control
   * name as the key.
   */

  public form: FormGroup;

  /**
   * Initialization of replacedString of type string & assigned value to empty string, that defines to show all data initially.
   * This variable is used to store the value what an user inputs to replace with the string.
   */
  public replacedString = '';

  /**
   * Initialization of occurencesString of type string & assigned value to empty string, that defines to show all data initially.
   * This variable is used to store the value of occurence which we will be getting after search.
   */
  public occurencesString = '';

  /**
   * Constructor is the default method of the class that is executed when the class is instantiated,
   * which ensures all the class variables are properly initialized & used for dependency injection.
   *
   * This function binds form control name of all fields with form builder and assign validators.
   *
   * @param fb
   * @param router
   */

  constructor(private fb: FormBuilder) {}

  /**
   * ngOnInit function will only be called once when the component is initialized.
   *
   * This function contains formInit function which is getting called on page load.
   */

  ngOnInit(): void {
    this.formInit();
  }

  /**
   *
   * This function binds form control name of all fields with form builder and assign validators. This function is
   * having parameter data which contains selected project data, all fields are getting filled by
   * respective value.
   *
   * @param data
   */

  formInit(): void {
    this.form = this.fb.group({
      for: ['', Validators.required],
      replaceWith: ['', Validators.required],
      searchInput: ['', Validators.required],
    });
  }

  /**
   *
   * The function will get triggered and it will use regular expression to find the string.
   *
   * This function takes content as an input from HTML, after success it will show the number of matches & the result output
   * @param content
   *
   * Here variable inputString & replaceString is used to store the value of formControl searchInput & replaceWith.
   *
   * The RegExp object is used for matching text with a pattern.
   *
   * The replaceAll() method returns a new string in the variable replacedString. The pattern is a string, and the replacement can be a string for each match.
   *
   */

  searchString(): void {
    let inputString = this.form.value.searchInput;

    let replaceString = this.form.value.replaceWith;

    /** A RegExp object or literal with the global flag and case insensitive. */

    let regExp = new RegExp(this.form.value.for, 'ig'); //constructor with string pattern as first argument

    let occurences = inputString.match(regExp); //Performs match to given string and returns match result.

    let occurencesCount = occurences ? occurences.length : 0; //occurance count

    /*
     * The matches are replaced with replaceString or the value returned by the specified replacerFunction.
     *
     * replacedString is a new string, with all matches of a pattern replaced by a replacement. This method does not change the calling String object. It returns a new string.
     */

    this.replacedString = inputString.replaceAll(regExp, replaceString);

    this.occurencesString = `${occurencesCount} ${
      occurencesCount > 1 ? 'matches' : 'match'
    } found`;
    if (occurencesCount > 0) {
      console.log('Result: ' + this.replacedString);
    }
  }
}
