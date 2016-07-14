/**
 * Yeoman Generator Starter Kit
 *
 * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { Base } from 'yeoman-generator';
import chalk from 'chalk';
import yosay from 'yosay';

export default Base.extend({

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      `Welcome to the amazing ${chalk.red('boilerplate')} generator!`
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true,
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  },

  writing() {
    this.fs.copy(
      this.templatePath('dummy.txt'),
      this.destinationPath('dummy.txt')
    );
  },

  install() {
    this.installDependencies();
  },

});
