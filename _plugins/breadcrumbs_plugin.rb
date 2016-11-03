module Jekyll
  module AbelFilter

    def breadcrumbs_plugin(input)
      url = input.split('/')
      url.pop
      url.shift
      url.map.each_with_index { |segment, i| "<a href='#{ '/' + url[0,i+1].join('/') }'>#{segment}</a>" }.join(" / ")
    end
  end
end

Liquid::Template.register_filter(Jekyll::AbelFilter)
