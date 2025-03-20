# CSE111 Final Exam Coding Portion

**105 minutes for 3 questions.**

**40 Points Total**

The coding portion of the exam will be completed entirely on your laptop.

* Done in partners. Keep your voices low to be respectful of others.
* Each partner submits their own code, laptop required.
* Allowed resources:
    * Personal notes, including digital
    * Resources on Canvas
    * Other Internet resources
    * IDE/text editors such as VS Code, Vim, Notepad++, etc.
    * Terminal applications such as bash, git, g++, make, etc.
* DISallowed resources:
    * Messaging apps (Discord, Slack, Telegram, etc.) You may not message your teammate. If you want to share code, you may only look off their screen, or use GitHub.
    * AI is NOT allowed.
    * GitHub Copilot is NOT allowed. Be sure to disable it in advance or you will get a zero on the exam.
    * Extensive use of "Google Search AI Overviews" or similar.

## Submitting

You have access to an autograder to verify that your files are (mostly) correct. Submit your work frequently to ensure everything is organized correctly. Please note that your score on the autograder does NOT reflect your final grade.

You will submit **all** your files to GradeScope through a `.zip` file. Be sure to maintain the file hierarchy. To zip from terminal, you can do:

```bash
unzip final_exam_coding_portion.zip -d <working_dir>
cd <working_dir>

# make changes...

zip -r submission.zip * -x "*.zip" "*/build/*"
```

Ensure that ALL your C++ files are formatted according `clang-format --style=Google`.

## Question 1 - `auxiliary`

**20 Points**

You are given a project that generates random images. (Assume it is a Git repository on GitHub). The source-code is finished, however you will need to add the following auxiliary files/features:

* A CMake file to build the project. (Be sure to link libpng, and give your project executable a meaningful name).
* A GitHub Workflow file to verify the formatting.
* A GitHub Workflow file to build and run the project.
* A README with
    * A description of the project
    * Instructions for downloading dependencies
    * Instructions for formatting
    * Instructions for building
    * Instructions for running
* A `.gitignore` file

If you have extra time, you are welcome to test your workflow files on a private GitHub repo.

## Question 2 - `primes`

**10 Points**

You are given a broken program. First, read through the code and figure out what it is supposed to do. Then use debugging strategies to figure out where the bugs are. Make minimal changes to the source code to implement your fixes; (only a few lines should be changed). Your fix should allow main to complete without errors, and you must eliminate all memory leaks.

(You may choose to create a CMake file to help you run the debugger through VS Code's CMake extension).

## Question 3 - `stack`

**10 Points**

You are given a fully-functional `Stack` class. It works for the example in `"stack/main.cpp"`. However, the implementation is quite difficult to read. Using your best judgement, as well as using rules-of-thumbs we spoke about in class, rewrite the `Stack` class so that it is more readable and maintainable. Only modify `"stack/stack.h"`.

You should also create a Makefile or CMake file to check your new implementation on `"stack/test.cpp"`.
