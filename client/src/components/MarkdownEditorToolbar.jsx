const TextAreaUtils = {
  getCursors: function(textarea) {
    let cursorStart = textarea.selectionStart;
    let cursorEnd = textarea.selectionEnd;

    return { cursorStart, cursorEnd };
  },

  spliceInSyntax: function(textarea, prefix, suffix) {
    let { cursorStart, cursorEnd } = this.getCursors(textarea);
    let text = textarea.value;
    let selectedText = text.substring(cursorStart, cursorEnd);

    if(!suffix) {
      suffix = prefix;
    }

    let newText = text.substring(0, cursorStart) + prefix + selectedText + suffix + text.substring(cursorEnd);

    textarea.value = newText;
    textarea.selectionStart = cursorStart + prefix.length;
    textarea.selectionEnd = cursorEnd + prefix.length;
  },
  appendInSyntax: function(textarea, prefix, suffix) {
    let text = textarea.value;
    
    if(!suffix) {
      text += `\n${prefix}`;
      textarea.value = text;
      return;
    }

    let newText = `\n${prefix}${suffix}`;
    textarea.value += newText;

    textarea.selectionStart = textarea.value.length - suffix.length;
    textarea.selectionEnd = textarea.value.length - suffix.length;
  },
  doesSelectionHaveSyntax: function(textarea, prefix, suffix) {
    let { cursorStart, cursorEnd } = this.getCursors(textarea);
    let text = textarea.value;
    let selectedText = text.substring(cursorStart, cursorEnd);

    if(!suffix) {
      suffix = prefix;
    }

    return selectedText.startsWith(prefix) && selectedText.endsWith(suffix);
  }
};

const ToolbarItems = {
  heading: {
    name: "Heading",
    icon: "fa-h",
    onClick: function(textarea) {
      TextAreaUtils.appendInSyntax(textarea, '###');
    }
  },
  bold: {
    name: "Bold",
    icon: "fa-bold",
    onClick: function(textarea) {
      if(!TextAreaUtils.doesSelectionHaveSyntax(textarea, '**')) {
        TextAreaUtils.spliceInSyntax(textarea, '**');
      }
    }
  },
  italic: {
    name: "Italic",
    icon: "fa-italic",
    onClick: function(textarea) {
      if(!TextAreaUtils.doesSelectionHaveSyntax(textarea, '_')) {
        TextAreaUtils.spliceInSyntax(textarea, '_');
      }
    }
  },
  quote: {
    name: "Quote",
    icon: "fa-quote-right",
    onClick: function(textarea) {
      TextAreaUtils.appendInSyntax(textarea, '>');
    }
  },
  code: {
    name: "Code",
    icon: "fa-code",
    onClick: function(textarea) {
      if(!TextAreaUtils.doesSelectionHaveSyntax(textarea, '`')) {
        TextAreaUtils.spliceInSyntax(textarea, '`', '`');
      }
    }
  },
  link: {
    name: "Link",
    icon: "fa-link",
    onClick: function(textarea) {
      if(!TextAreaUtils.doesSelectionHaveSyntax(textarea, '[', '](url)')) {
        TextAreaUtils.spliceInSyntax(textarea, '[', '](url)');
      }
    }
  },
  list: {
    name: "List",
    icon: "fa-list-ul",
    onClick: function(textarea) {
      TextAreaUtils.appendInSyntax(textarea, '* ');
    }
  },
  numberedList: {
    name: "Numbered List",
    icon: "fa-list-ol",
    onClick: function(textarea) {
      TextAreaUtils.appendInSyntax(textarea, '1. ');
    }
  },
  image: {
    name: "Image",
    icon: "fa-image",
    onClick: function(textarea) {
      if(!TextAreaUtils.doesSelectionHaveSyntax(textarea, '![', '](url)')) {
        TextAreaUtils.spliceInSyntax(textarea, '![', '](url)');
      }
    }
  }
};

function MarkdownEditorToolbar({ textArea, setText }) {
  return (
    <>
      { Object.values(ToolbarItems).map((item) => {
          return (
            <button key={item.name} className="btn btn-link btn-sm" onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              item.onClick(textArea.current);
              setText(textArea.current.value);
            }}>
              <i className={`fa-solid ${item.icon}`}></i>
            </button>
          );
        })
      }
    </>
  );
}

export default MarkdownEditorToolbar;