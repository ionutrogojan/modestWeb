use std::fs::File;
// use std::path::Path;
use std::io::prelude::*;

fn main() {
    // open file
    let keywords = ["@content", "@function", "@style"];
    let mut load_file = File::open("test.modest").expect("Can't open file!");
    // create file
    let mut create_file = File::create("test.html").expect("Can't create file!");
    // check file
    // let content_file = Path::new("test.html").is_file();

    let mut contents = String::new();
    load_file.read_to_string(&mut contents).expect("Oops! Can not read file...");
    println!("File Contents:\n\n{}", contents);

    // if content_file == false {
        for kword in keywords {
            if contents.contains(kword) {
                println!("contains {}", kword);
                create_file.write_all(b"Hello Modest World!").expect("Oops! Can not write file...");
            } else {
                println!("does not contain {}, compiler exit with no output", kword);
            }
        }
    // } else {
    //     println!("test.html already exists");
    // }
}